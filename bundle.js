(() => { "use strict"; var e = { 258: (e, t, o) => { e.exports = o.p + "assets/images/catb5a241b1766437cbf058.jpg" }, 257: (e, t, o) => { e.exports = o.p + "assets/images/fury.jpg" } }, t = {}; function o(n) { var i = t[n]; if (void 0 !== i) return i.exports; var a = t[n] = { exports: {} }; return e[n](a, a.exports, o), a.exports } o.g = function () { if ("object" == typeof globalThis) return globalThis; try { return this || new Function("return this")() } catch (e) { if ("object" == typeof window) return window } }(), (() => { var e; o.g.importScripts && (e = o.g.location + ""); var t = o.g.document; if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) { var n = t.getElementsByTagName("script"); n.length && (e = n[n.length - 1].src) } if (!e) throw new Error("Automatic publicPath is not supported in this browser"); e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), o.p = e })(), (() => { let e = { id: 0, playerName: "", pronouns: { Category: "", subjectPro: "", objectPro: "", possAdj: "", possessivePro: "", reflex: "", is: "" } }; const t = [{ Category: "He/Him", subjectPro: "he", objectPro: "him", possAdj: "his", possessivePro: "his", reflex: "himself", is: "he is" }, { Category: "She/Her", subjectPro: "she", objectPro: "her", possAdj: "her", possessivePro: "hers", reflex: "herself", is: "she is" }, { Category: "They/Them", subjectPro: "they", objectPro: "them", possAdj: "their", possessivePro: "theirs", reflex: "themselves", is: "they are" }]; function n() { let e = document.getElementById("pronouns"); if (e) { let n = t.length; for (var o = 0; o < n; o++) { let n = `\n            <input type="radio" id="${t[o].subjectPro}" name="pronouns" value="${t[o].Category}">\n            <label for="${t[o].subjectPro}">${t[o].Category}</label><br>`; e.innerHTML += n } e.addEventListener("click", i) } } function i() { var e = document.querySelector('input[name="pronouns"]:checked')?.value, o = t.find((t => t.Category == e)); o && function (e) { l.pronouns = e, a(e) }(o), console.log(e), console.log(l) } function a(e) { let t = document.querySelectorAll(".playerPronouns"); t && t.forEach((t => t.innerHTML = `${e.Category}`)) } const l = { id: 0, playerName: "", pronouns: { Category: "", subjectPro: "", objectPro: "", possAdj: "", possessivePro: "", reflex: "", is: "" } }; function r() { return l } function s(e) { l.id = e.id, l.playerName = e.playerName, l.pronouns = e.pronouns } function c() { var e, t = document.getElementById("playerName").value; console.log(`Player Name is: ${t}`), e = t, l.playerName = e, d(t), console.log(l) } function d(e) { const t = document.querySelectorAll(".yourName"); t && t.forEach((t => { t.innerHTML = `${e} ` })) } var u, m, p; (p = u || (u = {}))[p.show = 0] = "show", p[p.hidden = 1] = "hidden", p[p.hideReason = 2] = "hideReason"; class f { constructor(e) { this.paragraph = e } } !function (e) { e[e.hide = 0] = "hide", e[e.show = 1] = "show" }(m || (m = {})); class y extends class { constructor(e, t) { this.statName = e, this.value = t } }{ constructor(e, t, o) { super(e, t), this.style = o } } var h = o(258); var h1 = o(257)
; function g(e)
 { return [
    { name: "start",
      content: `<p>Однажды, в далёком 1279 году на планете Феллор, спутником которого является Неорна, находящаяся в 6.9 миллиардах световых лет от нашей родной Земли, в месте, которое прозывают Гибвонсом, жил кобольд. На вид простой, ничем не знаменит. Он проживал свою жизнь как обычное существо в тех землях. Пока не случилось что-то, что изменило его жизнь навсегда...</p>`,
     choices: 
     [
      {
         id: 1,
         content: '<p>...</p>',
         nextName: "1",
         consequence: 
         {
           item: 
           [
            { itemName: "хуета",
             itemQty: 1,
              description: "тест",
               itemCode: "test" 
            }
           ]
        }
      },
      {
         id:2,
         content: '<p>ага</p>',
         nextName: "кот"
      },
      {
         id:3,
         content: '<p>хорошо</p>',
         nextName: "3"
      }
     ] 
     }, 
     { name: "1", content: `<p>эээ</p>`, choices: [{ id: 1, content: "<p>тестус</p>", nextName: "end-1" }] },
    { name: "кот", content: `<p>\n        <img src="${h1}"></p>` },
    { name: "3", content: `<p>\n        <img src="${h}"></p>` },
    { name: "dragon-revenge", content: 'The dragons are back to revenge!', choices: [{ id: 1, content: "Are you prepared enough?", nextName: "battle", consequence: { stat: [{ statName: "skilled", value: 10, style: m.show }] } }, { id: 2, content: "not prepared! Panic!", nextName: "battle", consequence: { stat: [{ statName: "skilled", value: 0, style: m.show }] } }] }, 
    { name: "battle", content: "Kill the dragons!", choices: [{ id: 1, content: "Kill it!", nextName: "end-1", precondition: { stat: [{ statName: "skilled", value: 10 }] } }, { id: 2, content: "Run", nextName: "end-2" }] },
    { name: "end-1", content: "конец бум" }, { name: "end-2", content: "Everyone dies. Oh no." }, { name: "let-burn", content: '<p>На вас падает лекса!!!</p>', choices: [{ id: 1, content: "<p>трахнуть</p>", nextName: "end-3" }] },
    { name: "end-3", content: "<p>трахнуть.</p>", choices: [{ id: 1, content: "<p>трахать!</p>", nextName: "end-1", precondition: { stat: [{ statName: "Сила", value: 10}]}}]}]}
class v { constructor(e, t) { this.pickedUpLocation = [], this.item = e, this.pickedUpLocation.push(t) } } function b(e) { e.style.color = "#6A6C6E" } !function (e, t, o, n, i) { switch (e) { case e = "stat": case e = "item": case e = "quest": case e = "variable": } }("stat");
let $ = []; function S(e) { $.push(e) } function N() { return $ } function C() { return $.length = 0, $ } function L(e, t) { const o = $.find((t => t.item.itemCode == e.itemCode));
 if (o) if (o && 0 == o.item.itemQty) o.item.itemQty += e.itemQty, console.log(`${e.itemName} is already in the inventory. Adding 1 to quantity.`), console.log($), E(o.item);
else if (o.item.itemQty += e.itemQty, 0 == o.item.itemQty) !function (e) { let t = document.querySelector(`#pills-${e}-tab`), o = document.querySelector(`#pills-${e}`); t.remove(), o.remove() }(o.item.itemCode);
else { console.log(`${e.itemName} is already in the inventory. Adding 1 to quantity.`), console.log($), document.querySelector(`#${e.itemCode}-quantity`).textContent = `Количество: ${o.item.itemQty}`; let n = o.pickedUpLocation.find((e => e == t)); console.log(n, t), n || o.pickedUpLocation.push(t) } else { let o = new v(e, t); console.log(`${e.itemName} has been added to inventory`), S(o), console.log($), E(e) } } function E(e) { let t = document.querySelector("#inventory-tab"), o = document.querySelector("#inventory-tabContent"), n = `<li class="nav-item" role="presentation">\n        <a class="nav-link" \n        id="pills-${e.itemCode}-tab" \n        data-bs-toggle="pill" \n        href="#pills-${e.itemCode}" \n        role="tab" \n        aria-controls="pills-${e.itemCode}" aria-selected="false">${i = e.itemName, i ? i[0].toUpperCase() + i.substr(1).toLowerCase() : i}</a>\n        </li>`; var i; t.innerHTML += n; let a = `<div class="tab-pane fade" \n    id="pills-${e.itemCode}" \n    role="tabpanel" \n    aria-labelledby="pills-${e.itemCode}-tab">\n    ${e.description}\n    <div id="${e.itemCode}-quantity">Количество: ${e.itemQty}</div>\n    </div>`; o.innerHTML += a } function q() { let e = document.querySelector("#inventory-tab"), t = document.querySelector("#inventory-tabContent"); e.textContent = "", t.textContent = "" } let k = [{ statName: "Village Relationship", value: 10, style: m.show }, { statName: "Strength", value: 0, style: m.show }, { statName: "Intelligence", value: 0, style: m.show }]; function w() { return k } function x(e, t, o) { let n = new y(e, t, o); w().push(n) } function T(e) { e.forEach((e => x(e.statName, e.value, e.style))) } function P() { return w().length = 0, k } function H(e) { document.querySelectorAll(".stat").forEach((t => { t.innerHTML += `<div id='stat-${e.statName}'>${e.statName}: ${e.value}</div>` })) } function M() { document.querySelector(".stat").textContent = "" } function A(e) { e.forEach((e => { switch (e.style) { case e.style = m.show: H(e) } })) } function j(e) { let t = e.item, o = e.stat; t && t.forEach((e => { L(e, Z()) })), o && o.forEach((e => { !function (e) { let t = k.find((t => t.statName == e.statName)); if (t) { switch (console.log("it is found"), function (e, t) { w().find((t => t.statName == e.statName)).value += t }(t, e.value), e.style) { case e.style = m.hide: break; default: !function (e) { document.querySelector(`#stat-${e.statName}`).innerHTML = `<div id='stat-${e.statName}'>${e.statName}: ${e.value}</div>` }(t) }console.log(`Handled! modified ${t.value}`) } if (!t) { switch (x(e.statName, e.value, e.style), e.style) { case e.style = m.hide: break; default: H(e) }console.log("not found, so added new stat") } }(e) })) } function I(e, t, o) { let n = w().find((e => e.statName == t)), i = document.querySelector(`#${e}`); return n ? n.value < o ? (i.innerHTML += ` <p>Условия не выполнены: Уровень навыка ${t} ${n.value}/${o}</p>`, O.failed) : n.value >= o ? (console.log("Condition met. Proceed."), O.passed) : void 0 : (console.log("Не выполнены условия!"), i.innerHTML += ` [<p>Условие не выполнено: у игрока нет навыка "${t}"</p>]`, O.failed) } function Q(e, t, o, n) { const i = N().find((e => e.item.itemCode == t)); let a = document.querySelector(e); return i ? i && i.item.itemQty < o ? (a.innerHTML += ` [<p>Условие не выполнено: ${n} quantity ${i.item.itemQty}/${o}</p>]`, O.failed) : (console.log(`Condition: ${n} found in inventory! Proceed`), O.passed) : (a.innerHTML += ` [<p>Условие не выполнено: ${n} нету в инвентаре</p>]`, O.failed) } function B(e, t) { let o, n, i = t.item, a = t.stat; if (i && i.forEach((t => { let n = Q(`#cid${e.id}`, t.itemCode, t.itemQty, t.itemName); n == O.failed && (o = n) })), a && a.forEach((t => { let o = I(`cid${e.id}`, t.statName, t.value); o == O.failed && (n = o) })), o == O.failed || n == O.failed) { let t = document.querySelector(`#cid${e.id}`); b(t), t.classList.add("choice-blocked"), console.log(`${e.id} is blocked`) } } var O; !function (e) { e[e.passed = 0] = "passed", e[e.failed = 1] = "failed" }(O || (O = {})); class Y { constructor(e, t, o, n) { this.player = e, this.inventory = t, this.currentParagraphName = o, this.stat = n, this.date = (new Date).toLocaleString() } } function U() { let e = new Y(r(), N(), Z(), w()); return JSON.stringify(e) } function J(e) { C(), q(), s(e.player), e.inventory.forEach((e => S(e))), P(), M(), T(e.stat), A(e.stat), z(e.currentParagraphName, e.player), e.inventory.forEach((e => { e.item.itemQty > 0 && E(e.item) })), d(e.player.playerName), a(e.player.pronouns), document.getElementById(`${e.player.pronouns.subjectPro}`) && function (e) { document.getElementById(`${e.subjectPro}`).checked = !0 }(e.player.pronouns) } function R() { localStorage.setItem("autoSave", U()) } function D(e) { let t = JSON.parse(localStorage.getItem(e)).date; document.querySelector(`#saveDesc-${e}`).innerHTML = t } function K(e, t) { let o, n, i = t.item, a = t.stat; if (i && i.forEach((t => { let n = Q(`#${e.itemCode}`, t.itemCode, t.itemQty, t.itemName); n == O.failed && (o = n) })), a && a.forEach((t => { let o = I(e.itemCode, t.statName, t.value); o == O.failed && (n = o) })), o == O.failed || n == O.failed) { let t = document.querySelector(`#${e.itemCode}`); b(t), t.classList.add("item-blocked"), console.log(`${e.itemCode} is blocked`) } } let V; const F = document.getElementById("items"), G = document.getElementById("choices"); function z(e, t) { let o = r(), i = g().findIndex((t => t.name == e)), a = new f(g()[i]).paragraph, l = null; switch (F.innerHTML = null, X = e, t) { case "append": V = V + " " + a.content, W(V); break; default: W(null), V = a.content, W(V) }let s = a.choices; G.textContent = null, function (e, t) { if (e) { for (let o = 0; o < e.length; o++) { let n = e[o], i = `<a href="#" \n            class="choices" id="cid${n.id}" >\n            ${n.content} \n            </a><br>`; t.innerHTML += i, n.precondition && (console.log(`choice n.${n.id} has condition!`), B(n, n.precondition)) } for (let o = 0; o < e.length; o++) { let n = e[o], i = n.nextName, a = e[o].style, l = t.querySelector(`#cid${n.id}`); l.classList.contains("choice-blocked") || l.addEventListener("click", (function () { n.consequence && j(n.consequence), function (e) { for (; e.firstChild;)e.removeChild(e.firstChild) }(document.querySelector("#choices")), z(i, a), R() })) } } }(s, G), l = a.item, l && function (e, t, o) { for (var n = 0; n < e.length; n++) { let i = e[n], a = N().find((e => e.item.itemName == i.itemName && e.item.itemCode == i.itemCode)); if (a) { console.log(o); let e = a.pickedUpLocation.includes(`${o}`); if (console.log(e), e) { let e = `<a href="#" class="items picked" id="${i.itemCode}">[Added to Inventory] You've already picked up ${i.itemName}</a><br>`; console.log(`${i.itemName} is already picked up at this location (${o})`), t.innerHTML += e } else { let e = `<a href="#" class="items item-new-location" id="${i.itemCode}">You found ×${i.itemQty} ${i.itemName}</a><br>`; t.innerHTML += e, i.precondition && K(i, i.precondition) } } else { let e = `<a href="#" class="items" id="${i.itemCode}">You found ×${i.itemQty} ${i.itemName}</a><br>`; t.innerHTML += e, i.precondition && K(i, i.precondition) } } for (n = 0; n < e.length; n++) { let o = e[n], i = t.querySelector(`#${o.itemCode}`), a = i.classList.contains("picked"), l = i.classList.contains("item-new-location"), r = i?.classList.contains("item-blocked"); l ? i.addEventListener("click", (function () { L(o, Z()); let e = `[Added to Inventory] You picked up ${o.itemName}`; i.innerHTML = e, i.style.color = "#6A6C6E", R() }), { once: !0 }) : r || (a ? i.style.color = "#6A6C6E" : i.addEventListener("click", (function () { L(o, Z()), console.log(o.itemName); let e = `[Added to Inventory] You picked up ${o.itemName}`; i.innerHTML = e, i.style.color = "#6A6C6E", R() }), { once: !0 })) } }(l, F, e), document.getElementById("pronouns") && (n(), "" != o.pronouns.Category) && (document.getElementById(o.pronouns.subjectPro).checked = !0), document.querySelector("input#playerName") && document.addEventListener("keyup", (function (e) { e.target && e.target.matches("input#playerName") && c() })) } function W(e) { document.getElementById("paragraph").innerHTML = e } let X = "start"; function Z() { return X } function _() { C(), s(e), d(e.playerName), a(e.pronouns), q(), P(), M(), T([{ statName: "Сила", value: 1, style: m.show }, { statName: "Ловкость", value: 1, style: m.show }, { statName: "Харизма", value: 1, style: m.show }, { statName: "Интеллект", value: 1, style: m.show }, { statName: "Удача", value: 1, style: m.show }]), A(w()), z("start"), R() } window.onload = function () { localStorage.getItem("autoSave") ? function () { let e = JSON.parse(localStorage.getItem("autoSave")); e && J(e) }() : (z("start"), A(w())) }; const ee = document.querySelector("#playerName"); ee && ee.addEventListener("keyup", c); const te = document.querySelector("#coolbutton"); te && te.addEventListener("click", (function (e) { console.log("thing!") })), n(), document.querySelectorAll(".save").forEach((e => { let t = e.getAttribute("value"); e.addEventListener("click", (function () { var e; e = t, "undefined" != typeof Storage ? (console.log(`LocalStorage is supported! Saved file to ${e}`), localStorage.setItem(e, U()), D(e)) : console.log("LocalStorage is not supported in this browser! Please export the save code instead.") })) })), document.querySelectorAll(".load").forEach((e => { let t = e.getAttribute("value"); e.addEventListener("click", (function () { var e; e = t, "undefined" != typeof Storage ? (console.log("LocalStorage is supported!"), J(JSON.parse(localStorage.getItem(e)))) : console.log("LocalStorage is not supported in this browser! Please export the save code instead.") })) })), document.querySelectorAll(".export").forEach((e => { let t = e.getAttribute("value"); e.addEventListener("click", (function () { !function (e) { let t = localStorage.getItem(e), o = document.querySelector("#exportMessage"); o.textContent = null, o.innerHTML += `Save exported from ${e}.<br> \n    Copy and keep the code bellow to load later`; let n = document.querySelector("#saveOutput"); n.value = "", n.value = `${btoa(t)}`, n.select() }(t) })) })), document.querySelector(".exportSave")?.addEventListener("click", (function () { !function () { let e = document.querySelector("#exportMessage"); e.textContent = null, e.innerHTML += `Save created at ${(new Date).toLocaleString()}.<br> \n    Copy and keep the code bellow to load later`; let t = document.querySelector("#saveOutput"); t.value = "", t.value += `${btoa(U())}`, t.select() }() })), document.querySelector(".importSave")?.addEventListener("click", (function () { !function () { let e = document.querySelector("#saveOutput").value; e = atob(e), console.log(e); let t = JSON.parse(e); console.log(t), J(t), document.querySelector("#exportMessage").innerHTML += `<div class="alert alert-warning alert-dismissible fade show mt-1" role="alert">\n        <strong> Load Success! </strong> Loaded save from ${t.date}.\n            <button type = "button" class="btn-close" data - bs - dismiss="alert" aria - label="Close"> </button>\n                </div>` }() })), document.querySelector(".restartBtn")?.addEventListener("click", (function () { _() })); for (let e = 1; e < 4; e++)localStorage.getItem(`slot-${e}`) && D(`slot-${e}`) })() })();
//# sourceMappingURL=bundle.js.map