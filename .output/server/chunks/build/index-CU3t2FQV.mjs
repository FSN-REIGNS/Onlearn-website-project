import { ref, resolveDirective, mergeProps, withCtx, createTextVNode, unref, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderVNode } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { MessageSquare, Check, Circle, Sparkle, Stethoscope, Trophy, Apple } from 'lucide-vue-next';
import { _ as _sfc_main$1 } from './button-Df9t7cxE.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'framesync';
import 'popmotion';
import 'style-value-types';

const _imports_0 = publicAssetsURL("/images/avatar1.png");
const _imports_1 = publicAssetsURL("/images/hero.png");
const _imports_2 = publicAssetsURL("/images/avatar2.png");
const _imports_3 = publicAssetsURL("/images/id-card.png");
const _imports_4 = publicAssetsURL("/images/staff-training.png");
const _imports_5 = publicAssetsURL("/images/gift-card.png");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const courses = ref([
      {
        id: 1,
        title: "Project Management Basic",
        price: 99,
        students: "1.5k",
        image: "/images/course1.png"
      },
      {
        id: 2,
        title: "UI/UX Visual Professional",
        price: 199,
        students: "1.2k",
        image: "/images/course2.png"
      },
      {
        id: 3,
        title: "The Future of Web Design",
        price: 149,
        students: "850",
        image: "/images/course3.png"
      },
      {
        id: 4,
        title: "Advanced Development",
        price: 249,
        students: "950",
        image: "/images/course4.png"
      }
    ]);
    const categories = [
      {
        id: 1,
        name: "Beauty",
        description: "Our expert will teach you everything about beauty",
        icon: Sparkle,
        bgColor: "bg-blue-100",
        iconColor: "text-blue-500"
      },
      {
        id: 2,
        name: "Medical",
        description: "Get medical knowledge from our experts",
        icon: Stethoscope,
        bgColor: "bg-purple-100",
        iconColor: "text-purple-500"
      },
      {
        id: 3,
        name: "Sports",
        description: "The finest sports coaches will teach you",
        icon: Trophy,
        bgColor: "bg-yellow-100",
        iconColor: "text-yellow-500"
      },
      {
        id: 4,
        name: "Nutrition",
        description: "Get nutrition advice from our experts",
        icon: Apple,
        bgColor: "bg-orange-100",
        iconColor: "text-orange-500"
      }
    ];
    const benefits = [
      "You will get your ID card and many more benefits",
      "We will complete your ID card with the help of AI",
      "Teachers will study your syllabus and make skills at any time"
    ];
    const staffBenefits = [
      "Teachers will get paid as they get more and more training from our expert",
      "Teachers will study your syllabus and make skills at any time"
    ];
    const giftCardReasons = [
      "Because you can get high discount from it and high offers",
      "Because you can get high discount from it and high offers",
      "Because you can get high discount from it and high offers"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_motion = resolveDirective("motion");
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-4947691e><section id="home" class="bg-[#E8F5F3] px-4 sm:px-6 py-16 relative z-10" data-v-4947691e><div class="container mx-auto flex flex-col md:flex-row items-center justify-between" data-v-4947691e><div${ssrRenderAttrs(mergeProps({
        class: "w-full md:w-1/2 mb-8 md:mb-0",
        initial: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
        delay: 200
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-4947691e><p class="text-gray-500 mb-4" data-v-4947691e>Never stop learning</p><h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-8" data-v-4947691e> Grow up your skills by online courses with Onlearning </h1><div class="flex flex-wrap items-center gap-6 mb-8" data-v-4947691e>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        variant: "secondary",
        rounded: "full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Get Started `);
          } else {
            return [
              createTextVNode(" Get Started ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex items-center gap-2" data-v-4947691e><div class="flex -space-x-2" data-v-4947691e><!--[-->`);
      ssrRenderList(3, (i) => {
        _push(`<img${ssrRenderAttr("src", _imports_0)} class="w-8 h-8 rounded-full border-2 border-white" data-v-4947691e>`);
      });
      _push(`<!--]--></div><div class="flex text-yellow-400" data-v-4947691e>\u2605\u2605\u2605\u2605\u2605</div><span class="text-gray-600" data-v-4947691e>4.9/5</span></div></div><div class="flex items-center gap-2 bg-white p-2 rounded-lg w-fit" data-v-4947691e><div class="bg-[#E8F5F3] p-2 rounded" data-v-4947691e>`);
      _push(ssrRenderComponent(unref(MessageSquare), { class: "w-5 h-5 text-[#20B486]" }, null, _parent));
      _push(`</div><div data-v-4947691e><span class="text-2xl font-bold" data-v-4947691e>250k</span><p class="text-sm text-gray-600" data-v-4947691e>Enrolled Student</p></div></div></div><div${ssrRenderAttrs(mergeProps({
        class: "w-full md:w-1/2",
        initial: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
        delay: 400
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-4947691e><img${ssrRenderAttr("src", _imports_1)} alt="Student learning online" class="w-full float-animation" data-v-4947691e></div></div></section><section id="courses" class="py-16 relative z-0" data-v-4947691e><div class="container mx-auto px-4 sm:px-6" data-v-4947691e><h2${ssrRenderAttrs(mergeProps({
        class: "text-[#FF6636] text-3xl font-bold text-center mb-12",
        initial: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        delay: 600
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-4947691e> Popular Courses </h2><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-v-4947691e><!--[-->`);
      ssrRenderList(courses.value, (course, index2) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: course.id,
          class: "bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
          initial: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
          delay: 800 + index2 * 100
        }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-4947691e><div class="relative pb-[60%] overflow-hidden" data-v-4947691e><img${ssrRenderAttr("src", course.image)}${ssrRenderAttr("alt", course.title)} class="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105" data-v-4947691e></div><div class="p-4" data-v-4947691e><div class="flex items-center gap-2 mb-2" data-v-4947691e><div class="flex -space-x-2" data-v-4947691e><!--[-->`);
        ssrRenderList(2, (i) => {
          _push(`<img${ssrRenderAttr("src", _imports_2)} class="w-6 h-6 rounded-full border-2 border-white" data-v-4947691e>`);
        });
        _push(`<!--]--></div><span class="text-sm text-gray-600" data-v-4947691e>${ssrInterpolate(course.students)} Students</span></div><h3 class="font-bold mb-2" data-v-4947691e>${ssrInterpolate(course.title)}</h3><div class="flex justify-between items-center" data-v-4947691e><span class="text-[#FF6636] font-bold" data-v-4947691e>$${ssrInterpolate(course.price)}</span>`);
        _push(ssrRenderComponent(_sfc_main$1, { variant: "primary" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Enroll Now`);
            } else {
              return [
                createTextVNode("Enroll Now")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div></div></section><section id="categories" class="py-16 bg-gray-50 relative z-0" data-v-4947691e><div class="container mx-auto px-4 sm:px-6" data-v-4947691e><h2${ssrRenderAttrs(mergeProps({
        class: "text-3xl font-bold text-center mb-4",
        initial: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        delay: 1e3
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-4947691e> Course Categories </h2><p${ssrRenderAttrs(mergeProps({
        class: "text-gray-600 text-center mb-12 max-w-2xl mx-auto",
        initial: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        delay: 1100
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-4947691e> Onlearning is one powerful online software suite that combines all the tools needed to run a successful school or office. </p><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-v-4947691e><!--[-->`);
      ssrRenderList(categories, (category, index2) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: category.id,
          class: "text-center hover-lift",
          initial: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
          delay: 1200 + index2 * 100
        }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-4947691e><div class="${ssrRenderClass(`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${category.bgColor}`)}" data-v-4947691e>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(category.icon), {
          class: ["w-10 h-10", category.iconColor]
        }, null), _parent);
        _push(`</div><h3 class="font-bold mb-2" data-v-4947691e>${ssrInterpolate(category.name)}</h3><p class="text-gray-600 text-sm" data-v-4947691e>${ssrInterpolate(category.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section id="student-id" class="py-16 relative z-0" data-v-4947691e><div class="container mx-auto px-4 sm:px-6" data-v-4947691e><div class="flex flex-col md:flex-row items-center gap-12" data-v-4947691e><div${ssrRenderAttrs(mergeProps({
        class: "w-full md:w-1/2",
        initial: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
        delay: 1400
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-4947691e><h2 class="text-3xl font-bold mb-8" data-v-4947691e>Get Student ID card</h2><ul class="space-y-4" data-v-4947691e><!--[-->`);
      ssrRenderList(benefits, (benefit) => {
        _push(`<li class="flex items-start gap-4" data-v-4947691e><div class="w-6 h-6 rounded-full bg-[#E8F5F3] flex items-center justify-center mt-1" data-v-4947691e>`);
        _push(ssrRenderComponent(unref(Check), { class: "w-4 h-4 text-[#20B486]" }, null, _parent));
        _push(`</div><span data-v-4947691e>${ssrInterpolate(benefit)}</span></li>`);
      });
      _push(`<!--]--></ul></div><div${ssrRenderAttrs(mergeProps({
        class: "w-full md:w-1/2",
        initial: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
        delay: 1600
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-4947691e><img${ssrRenderAttr("src", _imports_3)} alt="Student ID Card" class="w-full hover-lift" data-v-4947691e></div></div></div></section><section id="staff-training" class="py-16 bg-gray-50 relative z-0" data-v-4947691e><div class="container mx-auto px-4 sm:px-6" data-v-4947691e><div class="flex flex-col md:flex-row items-center gap-12" data-v-4947691e><div${ssrRenderAttrs(mergeProps({
        class: "w-full md:w-1/2 order-2 md:order-1",
        initial: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
        delay: 1800
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-4947691e><img${ssrRenderAttr("src", _imports_4)} alt="Staff Training" class="w-full hover-lift" data-v-4947691e></div><div${ssrRenderAttrs(mergeProps({
        class: "w-full md:w-1/2 order-1 md:order-2",
        initial: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
        delay: 2e3
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-4947691e><span class="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full mb-4" data-v-4947691e> Training </span><h2 class="text-3xl font-bold mb-8" data-v-4947691e>Staff training</h2><ul class="space-y-4" data-v-4947691e><!--[-->`);
      ssrRenderList(staffBenefits, (benefit) => {
        _push(`<li class="flex items-start gap-4" data-v-4947691e><div class="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1" data-v-4947691e>`);
        _push(ssrRenderComponent(unref(Check), { class: "w-4 h-4 text-blue-600" }, null, _parent));
        _push(`</div><span data-v-4947691e>${ssrInterpolate(benefit)}</span></li>`);
      });
      _push(`<!--]--></ul></div></div></div></section><section id="gift-cards" class="py-16 relative z-0" data-v-4947691e><div class="container mx-auto px-4 sm:px-6" data-v-4947691e><div class="bg-[#FF6636] text-white rounded-2xl p-8 sm:p-12" data-v-4947691e><div class="flex flex-col md:flex-row items-center gap-12" data-v-4947691e><div${ssrRenderAttrs(mergeProps({
        class: "w-full md:w-1/2",
        initial: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
        delay: 2200
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-4947691e><h2 class="text-3xl font-bold mb-8" data-v-4947691e>Why You should buy gift cards?</h2><ul class="space-y-4 mb-8" data-v-4947691e><!--[-->`);
      ssrRenderList(giftCardReasons, (reason) => {
        _push(`<li class="flex items-center gap-4" data-v-4947691e>`);
        _push(ssrRenderComponent(unref(Circle), { class: "w-4 h-4" }, null, _parent));
        _push(`<span data-v-4947691e>${ssrInterpolate(reason)}</span></li>`);
      });
      _push(`<!--]--></ul>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        variant: "primary",
        class: "bg-white text-[#FF6636]",
        rounded: "full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Buy Now `);
          } else {
            return [
              createTextVNode(" Buy Now ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div${ssrRenderAttrs(mergeProps({
        class: "w-full md:w-1/2",
        initial: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
        delay: 2400
      }, ssrGetDirectiveProps(_ctx, _directive_motion)))} data-v-4947691e><img${ssrRenderAttr("src", _imports_5)} alt="Gift Card" class="w-full hover-lift" data-v-4947691e></div></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4947691e"]]);

export { index as default };
//# sourceMappingURL=index-CU3t2FQV.mjs.map
