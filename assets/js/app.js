(() => {
  "use strict";
  const e = new (class {
    constructor() {
      (this.headers = new Headers()),
        this.headers.append("Content-Type", "application/json");
    }
    async postSubscribe(e) {
      const t = JSON.stringify({ email: e.email, name: e.name }),
        n = {
          method: "POST",
          headers: this.headers,
          body: t,
          redirect: "follow",
        };
      try {
        return (
          await fetch(
            "https://84l4s5m4ik.execute-api.ap-northeast-2.amazonaws.com/default/newso-subscribe",
            n
          ).then((e) => e.json())
        ).body.result;
      } catch (e) {
        throw new Error(e);
      }
    }
    async addSubscriber(e) {
      const t = await this.postSubscribe(e),
        { Ok: n, Value: s } = t;
      if (!n) return "failUnknown";
      const r = s;
      for (let e in r) if (0 !== r[e].length) return e;
    }
  })();
  function t(e, t) {
    t
      ? (t.querySelector(e).hidden = !1)
      : (document.querySelector(e).hidden = !1);
  }
  function n(e, t) {
    t
      ? (t.querySelector(e).hidden = !0)
      : (document.querySelector(e).hidden = !0);
  }
  function s(e, t) {
    document.querySelector(e).addEventListener("click", () => {
      n(t);
    });
  }
  function r(e, n) {
    document.querySelectorAll(e).forEach((e) => {
      e.addEventListener("click", () => {
        t(n);
      });
    });
  }
  r(".js-subscribe-open-btn", ".overlay-subscribe"),
    r(".js-policy-open-btn", ".overlay-policy"),
    r(".mo-menu-btn", ".mo-menu-overlay"),
    s(".modal-exit", ".overlay-subscribe"),
    s(".mo-menu-modal-exit", ".mo-menu-overlay"),
    s(".modal-policy-exit", ".overlay-policy"),
    document.querySelectorAll(".js-subscribe-form").forEach((s) => {
      !(function (s) {
        s.addEventListener("submit", (r) => {
          r.preventDefault(),
            (async function (s, r) {
              s.preventDefault(), t(".loading-sppiner", r);
              const o = r.querySelector(".result-message");
              !(function (e) {
                e.querySelectorAll(".error-text-container").forEach((e) => {
                  e.style.display = "none";
                });
              })(o);
              const c = (function (e) {
                  const t = e.querySelector(".js-email-input"),
                    n = e.querySelector(".js-name-input");
                  return { email: t.value, name: n.value };
                })(r),
                a = await e.addSubscriber(c);
              n(".loading-sppiner", r),
                (function (e, t) {
                  const n = t.querySelector(".success"),
                    s = t.querySelector(".fail"),
                    r = {
                      update: {
                        status: n,
                        text: "입력하신 이메일 주소로 확인 메일을 보내드렸습니다.",
                      },
                      success: {
                        status: n,
                        text: "입력하신 이메일 주소로 확인 메일을 보내드렸습니다.",
                      },
                      failExistEmail: {
                        status: s,
                        text: "이미 구독 중인 이메일 주소입니다.",
                      },
                      failUnknown: {
                        status: s,
                        text: "이런, 뭔가 잘못된 것 같습니다. 입력한 값을 다시 확인하세요.",
                      },
                      default: { status: s, text: "이메일을 확인해주세요" },
                    };
                  !(function ({ status: e, text: t }) {
                    (e.querySelector(".result-message-text").innerText = t),
                      (e.style.display = "flex");
                  })(r[e] || r.default);
                })(a, o);
            })(r, s);
        });
      })(s);
    });
})();
