import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main = {
  __name: "button",
  __ssrInlineRender: true,
  props: {
    variant: {
      type: String,
      default: "primary"
    },
    rounded: {
      type: String,
      default: "default"
    },
    className: {
      type: String,
      default: "px-6 py-2"
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: [
          "transition-all duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
          __props.variant === "primary" && "bg-[#20B486] hover:bg-[#1a906b] text-white focus:ring-[#20B486]",
          __props.variant === "secondary" && "bg-[#FF6636] hover:bg-[#e65c31] text-white focus:ring-[#FF6636]",
          __props.variant === "text" && "text-gray-600 hover:text-gray-900",
          __props.variant === "outline" && "border-2 border-[#20B486] text-[#20B486] hover:bg-[#20B486] hover:text-white",
          __props.rounded === "full" ? "rounded-full" : "rounded-lg",
          __props.className
        ],
        disabled: __props.disabled || __props.loading,
        "aria-busy": __props.loading
      }, _ctx.$attrs, _attrs))}>`);
      if (__props.loading) {
        _push(`<span class="inline-flex items-center"><svg class="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Loading... </span>`);
      } else {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      }
      _push(`</button>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/button.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=button-Df9t7cxE.mjs.map
