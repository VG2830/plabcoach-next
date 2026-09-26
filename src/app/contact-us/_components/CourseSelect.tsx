"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";

const courses = [
  { value: "plab-1", label: "PLAB 1 / UKMLA" },
  { value: "plab-2", label: "PLAB 2 / UKMLA" },
  { value: "pres-3", label: "PRES 3" },
  { value: "psa", label: "Prescribing Safety Assessment" },
];

export default function CourseSelect() {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const selectRef = useRef<HTMLDivElement>(null);
  const selectedIndex = courses.findIndex((course) => course.value === selectedCourse);

  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (!selectRef.current?.contains(event.target as Node)) setIsOpen(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isOpen]);

  function chooseCourse(index: number) {
    setSelectedCourse(courses[index].value);
    setActiveIndex(index);
    setIsOpen(false);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const direction = event.key === "ArrowDown" ? 1 : -1;
      setActiveIndex((currentIndex) =>
        isOpen
          ? (currentIndex + direction + courses.length) % courses.length
          : selectedIndex >= 0
            ? selectedIndex
            : 0,
      );
      setIsOpen(true);
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (isOpen) chooseCourse(activeIndex);
      else {
        setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
        setIsOpen(true);
      }
    } else if (event.key === "Escape") {
      setIsOpen(false);
    } else if (event.key === "Tab") {
      setIsOpen(false);
    } else if (isOpen && event.key === "Home") {
      event.preventDefault();
      setActiveIndex(0);
    } else if (isOpen && event.key === "End") {
      event.preventDefault();
      setActiveIndex(courses.length - 1);
    }
  }

  return (
    <div
      ref={selectRef}
      className="relative h-[58px] rounded-[21px] border border-[var(--contact-field-border)] bg-[var(--contact-field-bg)] transition-colors focus-within:border-[var(--contact-button)] focus-within:ring-2 focus-within:ring-[var(--contact-button)]/15"
    >
      <input type="hidden" name="course" value={selectedCourse} />
      <button
        type="button"
        role="combobox"
        aria-label="Course you are interested in"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls="course-options"
        aria-activedescendant={isOpen ? `course-option-${activeIndex}` : undefined}
        onClick={() => {
          setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
          setIsOpen((open) => !open);
        }}
        onKeyDown={handleKeyDown}
        className="flex h-full w-full items-center justify-between rounded-[21px] px-[24px] text-left text-[13px] outline-none focus-visible:ring-2 focus-visible:ring-[var(--contact-button)]"
      >
        <span className={selectedCourse ? "text-[var(--contact-heading)]" : "text-[var(--contact-placeholder)]"}>
          {courses[selectedIndex]?.label ?? "Course You Are Interested In"}
        </span>
        <span
          aria-hidden="true"
          className={`h-[7px] w-[7px] border-b border-r border-[var(--contact-placeholder)] transition-transform ${isOpen ? "rotate-[225deg]" : "rotate-45"}`}
        />
      </button>

      {isOpen && (
        <div
          id="course-options"
          role="listbox"
          aria-label="Available courses"
          className="absolute left-0 right-0 top-[calc(100%+8px)] z-30 max-h-[240px] overflow-y-auto rounded-[12px] border border-[var(--contact-field-border)] bg-white py-1 shadow-[0_14px_32px_rgba(23,36,90,0.14)]"
        >
          {courses.map((course, index) => {
            const isSelected = selectedCourse === course.value;
            const isActive = activeIndex === index;

            return (
              <div
                key={course.value}
                id={`course-option-${index}`}
                role="option"
                aria-selected={isSelected}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => chooseCourse(index)}
                className={`flex cursor-pointer items-center justify-between px-[24px] py-[12px] text-[13px] transition-colors ${
                  isActive
                    ? "bg-[#eaf4ff] text-[var(--contact-button)]"
                    : "text-[var(--contact-heading)] hover:bg-[#f4f8fc]"
                } ${isSelected ? "font-semibold" : "font-normal"}`}
              >
                {course.label}
                {isSelected && <span aria-hidden="true" className="h-[7px] w-[7px] rounded-full bg-[var(--contact-button)]" />}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}