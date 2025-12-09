(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/remove-v0-watermark.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RemoveV0Watermark
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
// Removes the v0 watermark/badge script-injected into the page.
function scrubV0Artifacts() {
    const selectors = [
        "[data-v0]",
        "[data-v0-watermark]",
        "[data-v0-widget]",
        "#v0",
        "#__v0",
        'a[href*="v0.dev"]',
        'a[href*="v0.app"]',
        'iframe[src*="v0.dev"]'
    ];
    selectors.forEach((selector)=>{
        document.querySelectorAll(selector).forEach((node)=>{
            node.remove();
        });
    });
}
function RemoveV0Watermark() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RemoveV0Watermark.useEffect": ()=>{
            scrubV0Artifacts();
            const observer = new MutationObserver({
                "RemoveV0Watermark.useEffect": ()=>scrubV0Artifacts()
            }["RemoveV0Watermark.useEffect"]);
            observer.observe(document.documentElement, {
                childList: true,
                subtree: true
            });
            return ({
                "RemoveV0Watermark.useEffect": ()=>observer.disconnect()
            })["RemoveV0Watermark.useEffect"];
        }
    }["RemoveV0Watermark.useEffect"], []);
    return null;
}
_s(RemoveV0Watermark, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = RemoveV0Watermark;
var _c;
__turbopack_context__.k.register(_c, "RemoveV0Watermark");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_remove-v0-watermark_tsx_b0dcf5eb._.js.map