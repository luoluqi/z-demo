<template>
        <div class="item-p">
            <chart
            :options="bar"
            :init-options="initOptions"
            ref="bar"
            theme="ovilia-green"
            autoresize 
            />
        </div>       
</template>
<script>
/* eslint-disable */
import ECharts from '@/components/echarts/ECharts.vue'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
export default {
    components: {
        chart: ECharts
    },
    props: {
        data: {
            type: Array,
            default: []
        },
        title: {
            type: String,
            default: ''
        }
    },
    watch: {
        data (newVal, oldVue) {
           this.init()
        }
    },
    data () {
        return {
          
            bar: {
                title: {
                    text: this.title,
                    x: 'center',
                    textStyle:{
                        color: '#666',
                        fontSize: 12
                    },
                    bottom:3
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '10%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        axisTick: {
                            show: false,
                            alignWithLabel: true,
                            lineStyle: {
                                color: '#666666'
                            }
                        },
                        axisLabel: {
                            color: '#666666',
                            show: true
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#666666'
                            } 
                        }
                        
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        show: true,
                        axisTick: {
                            show: false,
                            alignWithLabel: true,
                            lineStyle: {
                                color: '#666666'
                            }
                        },
                        axisLabel: {
                            color: '#666666',
                            show: false
                        },
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#666666'
                            } 
                        }
                    }
                ],
                series: [
                    {
                        name: '',
                        type: 'bar',
                        barWidth: '40%',
                        label: {
                            show: true,
                            position: 'top'
                        },
                        data: []
                    }
                ]
            },
            initOptions: {
                renderer: 'canvas'
            }
        }
    },
    methods: {
        init () {
            var list = []
            var xAxisData = []
            for (var item of this.data) {
                var value = item.value
                var name = item.name
                var color = item.color
                list.push({
                    value: value,
                    name: item.name,
                    itemStyle: {
                        normal: {color: color}
                    }
                })
                xAxisData.push(name)
            }
            this.bar.series[0].data = list   
            this.bar.xAxis[0].data = xAxisData
        }
    },
    mounted () {
        this.init()
    }
}
</script>
<style scoped>
.item-p{
    width: 100%;
    height: 100%;
}
</style>
