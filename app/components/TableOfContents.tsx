"use client";

import { useEffect, useState } from "react";

type TocItem = {
  id: string;
  title: string;
  level: 2 | 3;
};

type Props = {
  items: TocItem[];
};

export function TableOfContents({ items }: Props) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [openMobile, setOpenMobile] = useState(false);

  useEffect(() => {
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0.1,
      }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  // Đảm bảo mục đang đọc luôn nằm trong khung nhìn của TOC
  useEffect(() => {
    if (!activeId) return;
    const el = document.querySelector<HTMLButtonElement>(
      `button[data-toc-id="${activeId}"]`
    );
    if (el) {
      el.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, [activeId]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${id}`);
    }
    // Đóng panel mục lục trên mobile sau khi chọn
    setOpenMobile(false);
  };

  const renderList = () => (
    <nav aria-label="Mục lục" className="text-sm space-y-1">
      <p className="uppercase tracking-[0.18em] text-[0.7rem] font-semibold text-midnight mb-2">
        Mục lục
      </p>
      <ul className="space-y-0.5">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => handleClick(item.id)}
                data-toc-id={item.id}
                className={`w-full text-left border-l pl-3 pr-2 py-1 transition-colors ${
                  item.level === 3 ? "ml-3 text-xs" : "text-sm"
                } ${
                  isActive
                    ? "border-burgundy text-burgundy font-semibold bg-paperAlt"
                    : "border-midnight/30 text-midnight hover:border-gold hover:text-midnight"
                }`}
              >
                {item.title}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );

  return (
    <>
      {/* Desktop */}
      <aside className="hidden lg:block sticky top-28 max-h-[calc(100vh-7rem)] overflow-y-auto pr-4 text-[13px]">
        {renderList()}
      </aside>

      {/* Mobile floating TOC button */}
      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setOpenMobile((v) => !v)}
          aria-expanded={openMobile}
          aria-controls="mobile-toc-panel"
          className="fixed bottom-4 right-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-gold/80 bg-midnight/95 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-paper shadow-lg backdrop-blur"
        >
          <span className="sr-only">Mở mục lục bài viết</span>
          <span aria-hidden className="text-xs">
            TOC
          </span>
        </button>
        {openMobile && (
          <div
            id="mobile-toc-panel"
            className="fixed inset-x-4 bottom-16 z-30 rounded-lg border border-gold/80 bg-paper px-4 py-3 shadow-xl max-h-[60vh] overflow-y-auto"
          >
            {renderList()}
          </div>
        )}
      </div>
    </>
  );
}
