/**
 * main.js — mobile nav, FAQ accordion (single-open), smooth scroll
 */
(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ── mobile nav ── */
  var navToggle = document.querySelector(".nav-toggle");
  var siteNav = document.querySelector(".site-nav");

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = siteNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "메뉴 닫기" : "메뉴 열기");
    });

    // 링크 클릭 시 모바일 메뉴 닫기
    siteNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        siteNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "메뉴 열기");
      });
    });
  }

  /* ── FAQ accordion — single open ── */
  var faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(function (item) {
    var trigger = item.querySelector(".faq-trigger");
    var panel = item.querySelector(".faq-panel");

    if (!trigger || !panel) return;

    trigger.addEventListener("click", function () {
      var isOpen = item.classList.contains("is-open");

      // 다른 항목 닫기
      faqItems.forEach(function (other) {
        if (other === item) return;
        other.classList.remove("is-open");
        var otherTrigger = other.querySelector(".faq-trigger");
        var otherPanel = other.querySelector(".faq-panel");
        if (otherTrigger) otherTrigger.setAttribute("aria-expanded", "false");
        if (otherPanel) otherPanel.hidden = true;
      });

      if (isOpen) {
        item.classList.remove("is-open");
        trigger.setAttribute("aria-expanded", "false");
        panel.hidden = true;
      } else {
        item.classList.add("is-open");
        trigger.setAttribute("aria-expanded", "true");
        panel.hidden = false;
      }
    });
  });

  /* ── smooth scroll for anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") return;

      var target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      if (prefersReducedMotion) {
        target.focus({ preventScroll: true });
        target.scrollIntoView();
      } else {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      // 접근성: 포커스 이동 (focusable하지 않으면 tabindex 부여)
      if (!target.hasAttribute("tabindex")) {
        target.setAttribute("tabindex", "-1");
      }
      target.focus({ preventScroll: true });
    });
  });

  /* ── Escape 키로 nav / FAQ 닫기 ── */
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;

    if (siteNav && siteNav.classList.contains("is-open")) {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.focus();
    }
  });
})();
