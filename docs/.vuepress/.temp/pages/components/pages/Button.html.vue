<template><h1 id="button-按钮" tabindex="-1"><a class="header-anchor" href="#button-按钮" aria-hidden="true">#</a> Button 按钮</h1>
<p>常用的操作按钮。</p>
<h2 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h2>
<p>基础的按钮用法。</p>
<demo customClass="" sourceCode="&lt;template&gt;
  &lt;a-button type=&quot;primary&quot;&gt;Primary Button&lt;/a-button&gt;
  &lt;a-button&gt;Default Button&lt;/a-button&gt;
  &lt;a-button type=&quot;dashed&quot;&gt;Dashed Button&lt;/a-button&gt;
  &lt;a-button type=&quot;text&quot;&gt;Text Button&lt;/a-button&gt;
  &lt;a-button type=&quot;link&quot;&gt;Link Button&lt;/a-button&gt;
&lt;/template&gt;
"><render-demo-0 />
        <template #description>
          <div>使用<code>type</code>、<code>plain</code>、<code>round</code>和<code>circle</code>属性来定义 Button 的样式。</div>
        </template>
        <template #highlight>
          <div v-pre class="language-vue">
            <pre class="shiki" style="background-color: var(--shiki-color-background)"><code><span class="line"><span style="color: var(--shiki-color-text)">&lt;</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">a-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;primary&quot;</span><span style="color: var(--shiki-color-text)">&gt;Primary Button&lt;/</span><span style="color: var(--shiki-token-string-expression)">a-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">a-button</span><span style="color: var(--shiki-color-text)">&gt;Default Button&lt;/</span><span style="color: var(--shiki-token-string-expression)">a-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">a-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;dashed&quot;</span><span style="color: var(--shiki-color-text)">&gt;Dashed Button&lt;/</span><span style="color: var(--shiki-token-string-expression)">a-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">a-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;text&quot;</span><span style="color: var(--shiki-color-text)">&gt;Text Button&lt;/</span><span style="color: var(--shiki-token-string-expression)">a-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">  &lt;</span><span style="color: var(--shiki-token-string-expression)">a-button</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">type</span><span style="color: var(--shiki-color-text)">=</span><span style="color: var(--shiki-token-string-expression)">&quot;link&quot;</span><span style="color: var(--shiki-color-text)">&gt;Link Button&lt;/</span><span style="color: var(--shiki-token-string-expression)">a-button</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"><span style="color: var(--shiki-color-text)">&lt;/</span><span style="color: var(--shiki-token-string-expression)">template</span><span style="color: var(--shiki-color-text)">&gt;</span></span>
<span class="line"></span></code></pre>
          </div>
        </template></demo></template>

<script lang="ts">
      import * as Vue from 'vue'
      
      export default {
        name: 'component-doc',
        components: {
          "render-demo-0": (function() {
    
    const { createTextVNode: _createTextVNode, resolveComponent: _resolveComponent, withCtx: _withCtx, createVNode: _createVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = Vue

const _hoisted_1 = /*#__PURE__*/_createTextVNode("Primary Button")
const _hoisted_2 = /*#__PURE__*/_createTextVNode("Default Button")
const _hoisted_3 = /*#__PURE__*/_createTextVNode("Dashed Button")
const _hoisted_4 = /*#__PURE__*/_createTextVNode("Text Button")
const _hoisted_5 = /*#__PURE__*/_createTextVNode("Link Button")

function render(_ctx, _cache) {
  const _component_a_button = _resolveComponent("a-button")

  return (_openBlock(), _createElementBlock(_Fragment, null, [
    _createVNode(_component_a_button, { type: "primary" }, {
      default: _withCtx(() => [
        _hoisted_1
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_a_button, null, {
      default: _withCtx(() => [
        _hoisted_2
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_a_button, { type: "dashed" }, {
      default: _withCtx(() => [
        _hoisted_3
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_a_button, { type: "text" }, {
      default: _withCtx(() => [
        _hoisted_4
      ]),
      _: 1 /* STABLE */
    }),
    _createVNode(_component_a_button, { type: "link" }, {
      default: _withCtx(() => [
        _hoisted_5
      ]),
      _: 1 /* STABLE */
    })
  ], 64 /* STABLE_FRAGMENT */))
}
  
    const democomponentExport = {}
    return {
      render,
      ...democomponentExport
    }
  })(),
        }
      }
    </script>
<style></style>