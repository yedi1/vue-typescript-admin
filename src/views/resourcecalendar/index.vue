<template>
  <div class="app-container">
    <div class="filter-container">
      <el-form :model="listQuery" ref="form" inline>
        <el-form-item label="产品线：">
          <el-select v-model="listQuery.product" clearable style="width: 120px" class="filter-item">
            <el-option v-for="item in productMaps" :key="item.value" :label="item.props" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="时间类型：">
          <el-select v-model="listQuery.dataType" clearable style="width: 120px" class="filter-item">
            <el-option v-for="item in dataTypeMaps" :key="item.value" :label="item.props" :value="item.value" />
          </el-select>
        </el-form-item>
        <el-form-item label="项目时间：">
          <el-date-picker value-format="yyyy-MM-dd" v-model="listQuery.time" type="daterange" range-separator="-" start-placeholder="" end-placeholder=""> </el-date-picker>
        </el-form-item>
        <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter"> 搜索 </el-button>
      </el-form>
    </div>
    <div id="gantt-wrap">
      <!-- <img src="./assets/logo.png" /> -->
      <div class="wl-gantt">
        <wl-gantt
          ref="wl-gantt"
          use-real-time
          :endDate="listQuery.time[1]"
          :startDate="listQuery.time[0]"
          :dateType="listQuery.dataType"
          :data="data"
          :columns="columns"
          :edit="false"
          default-expand-all
          :contextMenuOptions="contextMenuOptions"
          @selection-change="selectionChange"
          @expand-change="expandChange"
          @timeChange="timeChange"
          @taskRemove="taskRemove"
          @preChange="preChange"
          @taskAdd="taskAdd"
        >
          <template slot="prv">
            <!-- <el-table-column type="selection" width="55" align="center"> </el-table-column> -->
            <el-table-column type="index" width="55" label="序号"> </el-table-column>
          </template>
          <template #info-card="{ row }">
            <ul>
              <li>
                <label for="name">名称：</label><span id="name">{{ row.name }}</span>
              </li>
            </ul>
          </template>
        </wl-gantt>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Form } from 'element-ui'
import { parseTime } from '@/utils'
// import WlGantt from '@/pages/wl-gantt'
interface dataList {
  id: string
  pid: string
  name: string
  startDate: string
  endDate: string
  realStartDate: string
  realEndDate: string
  children?: dataList[]
}
@Component({
  name: 'ResourceLendar',
  components: {
    // WlGantt
  }
})
export default class extends Vue {
  private projectTime = {}

  private dataTypeMaps = [
    {
      props: '月度',
      value: 'monthAndDay'
    },
    {
      props: '年度',
      value: 'yearAndMonth'
    },
    {
      props: '当年',
      value: 'yearAndDay'
    }
  ]

  private productMaps = [
    {
      props: '仓配线',
      value: 1
    },
    {
      props: '前端线',
      value: 2
    },
    {
      props: '财务',
      value: 3
    }
  ]

  private data: dataList[] = [
    {
      id: '1',
      pid: '0',
      name: '张三',
      startDate: '2021-08-07',
      endDate: '2021-8-31',
      realStartDate: '2021-08-10',
      realEndDate: '2021-08-15',
      children: [
        {
          id: '1-2',
          pid: '1',
          name: 'vc1.0',
          startDate: '2021-08-07',
          endDate: '2021-8-10',
          realStartDate: '2021-08-08',
          realEndDate: '2021-08-09'
        },
        {
          id: '1-3',
          name: 'sco2.1',
          pid: '1',
          startDate: '2021-08-12',
          endDate: '2021-8-18',
          realStartDate: '2021-08-13',
          realEndDate: '2021-08-15'
        }
      ]
    },
    {
      id: '2',
      pid: '0',
      name: '李四',
      startDate: '2021-08-07',
      endDate: '2021-8-31',
      realStartDate: '2021-08-10',
      realEndDate: '2021-08-16'
    },
    {
      id: '3',
      pid: '0',
      name: '亚一',
      startDate: '2021-08-07',
      endDate: '2021-8-31',
      realStartDate: '2021-08-12',
      realEndDate: '2021-08-15'
    },
    {
      id: '4',
      pid: '0',
      name: '丙丁',
      startDate: '2021-08-07',
      endDate: '2021-8-31',
      realStartDate: '2021-08-12',
      realEndDate: '2021-08-25'
    },
    {
      id: '5',
      pid: '0',
      name: '张三2',
      startDate: '2021-08-07',
      endDate: '2021-8-18',
      realStartDate: '2021-08-10',
      realEndDate: '2021-08-15'
    },
    {
      id: '6',
      pid: '0',
      name: '1张三',
      startDate: '2021-08-07',
      endDate: '2021-8-15',
      realStartDate: '2021-08-10',
      realEndDate: '2021-08-15'
    },
    {
      id: '7',
      pid: '0',
      name: '张三',
      startDate: '2021-08-07',
      endDate: '2021-8-31',
      realStartDate: '2021-08-10',
      realEndDate: '2021-08-15'
    },
    {
      id: '8',
      pid: '0',
      name: '李四',
      startDate: '2021-08-07',
      endDate: '2021-8-31',
      realStartDate: '2021-08-10',
      realEndDate: '2021-08-16'
    },
    {
      id: '9',
      pid: '0',
      name: '亚一',
      startDate: '2021-08-07',
      endDate: '2021-8-31',
      realStartDate: '2021-08-12',
      realEndDate: '2021-08-15'
    },
    {
      id: '10',
      pid: '0',
      name: '丙丁',
      startDate: '2021-08-07',
      endDate: '2021-8-31',
      realStartDate: '2021-08-12',
      realEndDate: '2021-08-25'
    },
    {
      id: '11',
      pid: '0',
      name: '张三2',
      startDate: '2021-08-07',
      endDate: '2021-8-18',
      realStartDate: '2021-08-10',
      realEndDate: '2021-08-15'
    },
    {
      id: '12',
      pid: '0',
      name: '1张三',
      startDate: '2021-08-07',
      endDate: '2021-8-15',
      realStartDate: '2021-08-10',
      realEndDate: '2021-08-15'
    }
  ]

  private listQuery = { dataType: 'yearAndMonth', time: [parseTime(`${new Date().getTime() - 320 * 24 * 3600 * 1000}`), parseTime(`${new Date().getTime()}`)] }

  private selected = []

  private contextMenuOptions = [
    { label: '任务名称：', prop: 'name' },
    { label: '开始时间：', prop: 'startDate' },
    { label: '结束时间：', prop: 'endDate' },
    { label: '实际开始时间：', prop: 'realStartDate' },
    { label: '实际结束时间：', prop: 'realEndDate' }
  ]

  private columns = [{ type: 'name', minWidth: 200, colType: 'expand' }] // 可通过此参数配置列。其中内置有名称name、开始日期startDate、结束日期endDate、前置任务preTask，如果cloumns中有type等于这四个且slot为false时，将使用内置代码，当然除了内容使用内置代码，其他字段你还拥有配置权。另外如果不是为了配置内置列参数，slot中的prv和default仍可以用来自定义列

  private handleFilter(arg: any) {
    console.log('🚀 ~ file: index.vue ~ line 158 ~ extends ~ handleFilter ~ arg', arg)
  }

  private handleCreate(arg: any) {
    console.log('🚀 ~ file: index.vue ~ line 164 ~ extends ~ arg', arg)
  }

  private aa(row: any) {
    console.log(row, 99)
  }

  /**
   * 时间发生更改
   * row: Object 当前行数据c
   */
  private timeChange(row: any) {
    console.log('时间修改:', row)
  }

  //
  /**
   * 前置任务发生更改
   * row: Object 当前行数据
   * oldval: [String, Array] 前置修改前的旧数据
   * handle: Boolean 是否用户编辑产生的改变
   */
  private preChange(row: any, oldval: any, handle: any) {
    console.log('前置修改:', row, oldval, handle)
  }

  // 数表展开行
  private expandChange(row: any, expanded: any) {
    console.log('展开行:', row, expanded)
  }

  // 多选选择
  private selectionChange(/* val */) {
    // console.log("多选：", val);
  }

  // 删除任务
  private taskRemove(item: any) {
    console.log('删除任务：', item)
  }

  // 添加任务
  private taskAdd(item: any) {
    console.log('添加任务：', item) // 非懒加载方式直接设置子数据
    /* this.$set(
        item,
        "children",
        item.children.concat([
          {
            pid: item.id,
            id: "###",
            name: "一轮新月",
            startDate: "2019-10-11",
            endDate: "2019-10-19"
          }
        ])
      ); */
    ;(this.$refs['wl-gantt'] as Form).loadTreeAdd(item.id, [
      {
        pid: item.id,
        id: '###',
        name: '一轮新月',
        startDate: '2019-10-11',
        endDate: '2019-10-19'
      }
    ])
  }

  // 懒加载
  private lazyLoad(tree: any, treeNode: any, resolve: any) {
    setTimeout(() => {
      resolve([
        {
          id: '1-1-1',
          pid: tree.id,
          name: '日落云巅',
          startDate: '2019-09-10',
          endDate: '2019-09-13'
        }
      ])
    }, 1000)
  }
}
</script>

<style lang="scss">
.wl-gantt {
  margin: 20px auto;
  // width: 800px;
}
</style>
