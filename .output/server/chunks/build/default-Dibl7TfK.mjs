import { _ as __nuxt_component_0 } from './nuxt-link-BXxPlIRz.mjs';
import { ref, resolveDirective, mergeProps, withCtx, createVNode, createTextVNode, unref, resolveDynamicComponent, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrGetDirectiveProps, ssrRenderSlot, ssrRenderVNode } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { Menu, X, Facebook, Twitter, Instagram } from 'lucide-vue-next';
import { _ as _sfc_main$1 } from './button-Df9t7cxE.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'framesync';
import 'popmotion';
import 'style-value-types';

const _imports_0 = publicAssetsURL("/images/logo.png");
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const isMobileMenuOpen = ref(false);
    const scrolled = ref(false);
    const isSubmitting = ref(false);
    const showConfirmation = ref(false);
    const activeSection = ref("home");
    const contactForm = ref({
      email: "",
      message: ""
    });
    const navItems = [
      { name: "Home", id: "home" },
      { name: "Courses", id: "courses" },
      { name: "Categories", id: "categories" },
      { name: "Contact", id: "contact" }
    ];
    const socials = [
      { name: "Facebook", icon: Facebook, link: "#" },
      { name: "Twitter", icon: Twitter, link: "#" },
      { name: "Instagram", icon: Instagram, link: "#" }
    ];
    const quickLinks = ["About Us", "Contact", "Privacy Policy", "Terms of Service"];
    const footerCategories = ["Development", "Business", "Design", "Marketing"];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _directive_motion = resolveDirective("motion");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))} data-v-e16257cd><nav class="${ssrRenderClass([{ "shadow-md": scrolled.value }, "bg-[#E8F5F3] px-4 sm:px-6 py-4 sticky top-0 z-50 transition-all duration-300"])}" data-v-e16257cd><div class="container mx-auto flex items-center justify-between" data-v-e16257cd>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Onlearn" class="h-8" data-v-e16257cd${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "Onlearn",
                class: "h-8"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hidden md:flex gap-8" data-v-e16257cd><!--[-->`);
      ssrRenderList(navItems, (item) => {
        _push(`<a${ssrRenderAttr("href", `#${item.id}`)} class="${ssrRenderClass([{ "text-[#20B486] font-semibold": activeSection.value === item.id }, "text-gray-600 hover:text-gray-900 transition-colors"])}" data-v-e16257cd>${ssrInterpolate(item.name)}</a>`);
      });
      _push(`<!--]--></div><div class="hidden md:flex items-center gap-4" data-v-e16257cd>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        variant: "text",
        class: "hover:shadow-lg transition-shadow duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Sign In`);
          } else {
            return [
              createTextVNode("Sign In")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        variant: "primary",
        rounded: "full",
        class: "hover:shadow-lg transition-shadow duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Sign Up`);
          } else {
            return [
              createTextVNode("Sign Up")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><button class="md:hidden" data-v-e16257cd>`);
      if (!isMobileMenuOpen.value) {
        _push(ssrRenderComponent(unref(Menu), { class: "w-6 h-6" }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(X), { class: "w-6 h-6" }, null, _parent));
      }
      _push(`</button></div></nav>`);
      if (isMobileMenuOpen.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "md:hidden bg-[#E8F5F3] px-4 py-2 fixed w-full z-40",
          initial: { opacity: 0, y: -20 },
          enter: { opacity: 1, y: 0 }
        }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-e16257cd><div class="space-y-4" data-v-e16257cd><!--[-->`);
        ssrRenderList(navItems, (item) => {
          _push(`<a${ssrRenderAttr("href", `#${item.id}`)} class="${ssrRenderClass([{ "text-[#20B486] font-semibold": activeSection.value === item.id }, "block py-2 text-gray-600 hover:text-gray-900 transition-colors"])}" data-v-e16257cd>${ssrInterpolate(item.name)}</a>`);
        });
        _push(`<!--]--><div class="pt-4 space-y-2" data-v-e16257cd>`);
        _push(ssrRenderComponent(_sfc_main$1, {
          variant: "text",
          class: "w-full justify-center hover:shadow-lg transition-shadow duration-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Sign In`);
            } else {
              return [
                createTextVNode("Sign In")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_sfc_main$1, {
          variant: "primary",
          class: "w-full justify-center hover:shadow-lg transition-shadow duration-300",
          rounded: "full"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Sign Up`);
            } else {
              return [
                createTextVNode("Sign Up")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<main data-v-e16257cd>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer id="contact" class="bg-[#E8F5F3] pt-16 pb-8" data-v-e16257cd><div class="container mx-auto px-4 sm:px-6" data-v-e16257cd><div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12" data-v-e16257cd><div data-v-e16257cd><img${ssrRenderAttr("src", _imports_0)} alt="Onlearn" class="h-8 mb-4" data-v-e16257cd><p class="text-gray-600 mb-4" data-v-e16257cd> Empowering minds through quality online education. </p><div class="flex space-x-4" data-v-e16257cd><!--[-->`);
      ssrRenderList(socials, (social) => {
        _push(`<a${ssrRenderAttr("href", social.link)} class="text-gray-600 hover:text-gray-900 transition-colors hover:shadow-lg hover:scale-110 transform duration-300" data-v-e16257cd>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(social.icon), { class: "w-5 h-5" }, null), _parent);
        _push(`</a>`);
      });
      _push(`<!--]--></div></div><div data-v-e16257cd><h3 class="font-bold mb-4" data-v-e16257cd>Quick Links</h3><ul class="space-y-2" data-v-e16257cd><!--[-->`);
      ssrRenderList(quickLinks, (link) => {
        _push(`<li data-v-e16257cd><a href="#" class="text-gray-600 hover:text-gray-900 transition-colors" data-v-e16257cd>${ssrInterpolate(link)}</a></li>`);
      });
      _push(`<!--]--></ul></div><div data-v-e16257cd><h3 class="font-bold mb-4" data-v-e16257cd>Categories</h3><ul class="space-y-2" data-v-e16257cd><!--[-->`);
      ssrRenderList(footerCategories, (category) => {
        _push(`<li data-v-e16257cd><a href="#" class="text-gray-600 hover:text-gray-900 transition-colors" data-v-e16257cd>${ssrInterpolate(category)}</a></li>`);
      });
      _push(`<!--]--></ul></div><div data-v-e16257cd><h3 class="font-bold mb-4" data-v-e16257cd>Contact Us</h3><form class="space-y-4" data-v-e16257cd><input${ssrRenderAttr("value", contactForm.value.email)} type="email" placeholder="Email address" class="w-full px-4 py-2 rounded-lg border-2 border-[#20B486] focus:outline-none" required data-v-e16257cd><textarea placeholder="Your message" rows="3" class="w-full px-4 py-2 rounded-lg border-2 border-[#20B486] focus:outline-none" required data-v-e16257cd>${ssrInterpolate(contactForm.value.message)}</textarea>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        type: "submit",
        variant: "primary",
        class: "w-full hover:shadow-lg transition-shadow duration-300",
        disabled: isSubmitting.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(isSubmitting.value ? "Sending..." : "Send Message")}`);
          } else {
            return [
              createTextVNode(toDisplayString(isSubmitting.value ? "Sending..." : "Send Message"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form>`);
      if (showConfirmation.value) {
        _push(`<div class="mt-4 text-green-600" data-v-e16257cd> Your message has been received. We&#39;ll get back to you soon. </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600" data-v-e16257cd><p data-v-e16257cd>\xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Onlearn. All rights reserved.</p></div></div></footer></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e16257cd"]]);

export { _default as default };
//# sourceMappingURL=default-Dibl7TfK.mjs.map
