<template>
  <div class="edit-page">
    <a-layout id="components-layout-top-side-2">
      <a-layout>
        <a-layout-sider width="15%" style="background: #fff">
          <a-tabs>
            <a-tab-pane key="components" tab="组件列表">
              组件列表
            </a-tab-pane>
            <a-tab-pane key="pages" tab="页面管理">
              页面管理
            </a-tab-pane>
          </a-tabs>
        </a-layout-sider>
        <a-layout>
          <a-layout-content>
            <div class="edit-main">
              <div class="control-bar">
                <a-menu
                  mode="horizontal"
                  :style="{ lineHeight: '64px' }"
                >
                  <a-tooltip title="撤销">
                    <a-button type="link" size="large">
                      <template #icon><icon-font type="icon-undo" /> </template>
                    </a-button>
                  </a-tooltip>
                  <a-tooltip title="重做">
                    <a-button type="link" size="large">
                      <template #icon><icon-font type="icon-redo" /> </template>
                    </a-button>
                  </a-tooltip>
                  <a-tooltip title="导入PSD">
                    <a-button type="link" size="large" disabled="true">
                      <template #icon><icon-font type="icon-ps" /> </template>
                    </a-button>
                  </a-tooltip>
                  <a-tooltip title="预览">
                    <a-button type="link" size="large">
                      <template #icon><icon-font type="icon-eye" /> </template>
                    </a-button>
                  </a-tooltip>
                  <a-tooltip title="缩小">
                    <a-button type="link" size="large">
                      <template #icon><icon-font type="icon-Zoom-Out"/> </template>
                    </a-button>
                  </a-tooltip>
                  <a-tooltip title="放大">
                    <a-button type="link" size="large">
                      <template #icon><icon-font type="icon-Zoom-In"/> </template>
                    </a-button>
                  </a-tooltip>
                </a-menu>
              </div>
              <div class='canvas-wrapper'>
                <div class='edit-model' style="height: 100%; position: relative;">
                  <div class="page-preview-wrapper" ref="canvas-panel" id="canvas-panel" style="width: 100%; height: 100%; overflow: hidden; position: relative; z-index: 0; opacity: 1;">
                    <div style="width: 100%; height: 100%; background-color: rgba(255, 255, 255, 0.2);"></div>
                    <!-- <edit-shape
                            v-for="item in activePage.elements"
                            :key="item.uuid"
                            :uuid="item.uuid"
                            :defaultStyle="item.commonStyle"
                            :style="getCommonStyle({width: item.commonStyle.width, height: item.commonStyle.height, left: item.commonStyle.left,top: item.commonStyle.top,position: item.commonStyle.position})"
                            @handleElementClick="handleElementClick(item.uuid)"
                            @resize="handleElementResize"
                            :active="item.uuid === activeElementUUID">
                    </edit-shape> -->
                  </div>
                </div>
              </div>
            </div>
          </a-layout-content>
        </a-layout>
        <a-layout-sider width="25%" style="background: #fff">
          <a-tabs>
            <a-tab-pane key="属性" tab="属性">
              从这里进行属性编辑
            </a-tab-pane>
            <a-tab-pane key="动画" tab="动画">
              从这里添加动画
            </a-tab-pane>
            <a-tab-pane key="动作" tab="动作">
              从这里添加动作
            </a-tab-pane>
            <a-tab-pane key="脚本" tab="脚本">
              从这里增加js脚本
            </a-tab-pane>
            <a-tab-pane key="背景" tab="背景">
              从这里进行背景编辑
            </a-tab-pane>
          </a-tabs>
        </a-layout-sider>
      </a-layout>
    </a-layout>
  </div>
</template>
<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import { createFromIconfontCN } from '@ant-design/icons-vue'

const IconFont: any = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2261525_ngad20lea9.js'
})

@Options({
  components: {
    IconFont
  }
})

export default class Editor extends Vue {}
</script>

<style lang="less" scoped>
.edit-page {
  height: 100%;
}
#components-layout-top-side-2 {
  height: 100%;
}
.canvas-wrapper {
  position: relative;
  top: 60px;
  width: 320px;
  min-height: 568px;
  margin: 0 auto;
  background: #fff;
  border: 1px solid #e7e7e7;
}
.page-preview-wrapper {
  height: 100%;
  position: relative;
}
.control-bar{
  position: absolute;
  top: -2px;
  text-align: center;
  z-index: 1000;
  left: 15%;
  right: 25%;
}
.edit-main {
  background-size: 26px 26px;
  background-image: linear-gradient(45deg,#f5f5f5 25%,transparent 0,transparent 75%,#f5f5f5 0),linear-gradient(45deg,#f5f5f5 25%,transparent 0,transparent 75%,#f5f5f5 0);
}
</style>
