!function(){var t=document.querySelector("body"),e=document.querySelector(".gallary__backdrop"),o=document.querySelectorAll(".gallary__image"),n=document.querySelector(".gallary__btn-next"),c=document.querySelector(".gallary__btn-prev"),i=null,l=null,s=0,a="is-fixed",r="is-surfaced";function u(o){o.stopPropagation(),i?(y(i),i=null):(i=o.target,l=i.image_intex,d(i)),e.classList.toggle(r),t.classList.toggle("is-locked")}function d(t){t.style.setProperty("--top","".concat(t.y,"px")),t.style.setProperty("--left","".concat(t.x,"px")),t.style.setProperty("--width","".concat(t.width,"px")),t.style.setProperty("--height","".concat(t.height,"px")),t.classList.add(a),setTimeout((function(){t.classList.add(r)}),10)}function y(t){t.classList.remove(r),setTimeout((function(){t.classList.remove(a)}),250)}o.forEach((function(t){t.addEventListener("click",u),t.image_intex=s,s++})),e.addEventListener("click",u),n.addEventListener("click",(function(t){t.stopPropagation(),i?(y(i),++l>=s&&(l=0)):l=0,d(i=o[l])})),c.addEventListener("click",(function(t){t.stopPropagation(),i?(y(i),--l<0&&(l=s-1)):l=s-1,d(i=o[l])}))}();
//# sourceMappingURL=index.4b6886ec.js.map
