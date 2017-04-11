<style>
    .mui-row.mui-fullscreen>[class*="mui-col-"] {
        height: 100%;
    }
    
    .segmentedLeft,
    .mui-control-content {
        overflow-y: auto;
        /*overflow-y: scroll;*/
        height: 100%;
    }
    
    .mui-segmented-control .mui-control-item {
        line-height: 50px;
        width: 100%;
    }
    
    .mui-segmented-control .mui-control-item label {
        float: left;
        text-align: left;
    }
    
    .mui-segmented-control.mui-segmented-control-inverted .mui-control-item.mui-active {
        background-color: #fff;
    }
    
    #segmentedControlContents .mui-col-xs-5,
    #segmentedControlContents {
        border-top: 1px solid #c8c7cc;
    }
    
    #segmentedControlContents {
        border-left: 1px solid #c8c7cc;
    }
    
    #segmentedControls a {
        display: block;
        height: 100%;
    }
    
    .commonareas.mui-fullscreen {
        top: 80px;
    }
    
    #segmentedControlContents .mui-checkbox.mui-left label,
    #segmentedControlContents .mui-radio.mui-left label {
        padding: 0;
    }
    
    a,
    a:hover {
        color: #000;
    }
    
    .mui-segmented-control .mui-control-item.radio label {
        float: left;
        text-align: left;
        width: 100%;
    }
</style>
<template>

    <div class="commonareas mui-content mui-row mui-fullscreen">
        <div class="mui-col-xs-5 segmentedLeft">
            <div id="segmentedControls" class=" mui-segmented-control mui-segmented-control-inverted mui-segmented-control-vertical mui-input-group">
            </div>
        </div>
        <div id="segmentedControlContents" class="mui-col-xs-7">

        </div>
    </div>

</template>

<script>
    import mui from '../assets/js/mui';
    import areasMap from './dataAreas';
    import _ from 'lodash';
    import $ from 'webpack-zepto';
    export default {
        name: 'commonAreas',
        data() {
            return {
                items: {},
                currentArea: '',
                currentCity: '',
            }
        },
        props: {
            ty: {
                default: 'checkbox'
            }
        },

        mounted: function() {
            delete areasMap['-'];
            let self = this;
            mui.init();
            var controls = document.getElementById("segmentedControls");
            var contents = document.getElementById("segmentedControlContents");
            var strhtml = [];

            for (let p in areasMap) {
                let strLeft = '';
                if (self.ty == 'checkbox') {
                    strLeft = [
                        '<div class="mui-input-row mui-checkbox mui-left mui-control-item">',
                        '<a  href="#content_' + p + '"><label>' + p + '</label></a>',
                        '<input name="areas" value="' + p + '" type="checkbox">',
                        '</div>'
                    ];
                } else {
                    strLeft = [
                        '<div class="mui-input-row   mui-left mui-control-item radio">',
                        '<a  href="#content_' + p + '"><label>' + p + '</label></a>',
                        '</div>'
                    ];
                }


                strhtml.push(strLeft.join(''));
            }
            controls.innerHTML = strhtml.join('');

            strhtml = [];
            for (let p in areasMap) {
                if (areasMap[p].length > 0) {
                    strhtml.push('<div id="content_' + p + '" class="mui-control-content"> <ul class="mui-table-view">');

                    for (let c in areasMap[p]) {
                        if (_.isInteger(+c)) {
                            let city = areasMap[p][c];
                            let strRight = '';
                            if (self.ty == 'checkbox') {
                                strRight = [
                                    '<li class="mui-table-view-cell mui-checkbox mui-left">',
                                    '<label>' + city + '</label>',
                                    '<input name="city" value="' + city + '" type="checkbox">',
                                    '</li>'
                                ];
                            } else {
                                strRight = [
                                    '<li class="mui-table-view-cell mui-radio mui-left">',
                                    '<label>' + city + '</label>',
                                    '<input name="city" value="' + city + '" type="radio" province="' + p + '">',
                                    '</li>'
                                ];
                            }
                            strhtml.push(strRight.join(''));
                        }
                    }
                    strhtml.push('</ul></div>');
                } else {

                }
            }
            contents.innerHTML = strhtml.join('');
            //默认选中第一个 
            controls.querySelector('.mui-control-item').classList.add('mui-active');
            contents.querySelector('.mui-control-content').classList.add('mui-active');

            let domAreas = 'input[type="checkbox"][name="areas"]';
            let domCity = '';
            if (this.ty == 'checkbox') {
                domCity = 'input[type="checkbox"][name="city"]';
            } else {
                domCity = 'input[type="radio"][name="city"]';
            }
            mui('#segmentedControls')
                .on('tap', 'label', function() {
                    $('.mui-control-content').removeClass('mui-active');
                    $('#content_' + $(this).html()).addClass('mui-active');
                    self.currentArea = $(this).html();
                })
                .on('change', domAreas, function() {
                    $('.mui-control-content').removeClass('mui-active');
                    let label = $(this).parent().find('label').html();
                    $('#content_' + label).addClass('mui-active');

                    self.currentArea = label;
                    //---
                    let ck = $(this).is(':checked');
                    $('#content_' + $(this).val()).find(domCity).prop('checked', ck);

                    self.setItems(label, domCity);
                })

            mui('#segmentedControlContents')
                .on('change', 'input[type="checkbox"][name="city"]', function() {

                    let count = $('#content_' + self.currentArea).find(domCity).length;
                    let choose = $('#content_' + self.currentArea).find(domCity + ':checked').length;

                    $('#segmentedControls ' + domAreas + '[value="' + self.currentArea + '"]').prop('checked', count == choose);

                    self.setItems(self.currentArea, domCity);
                })
                .on('change', 'input[type="radio"][name="city"]', function() {
                    self.currentArea = $(domCity + ':checked').attr('province');
                    //self.currentCity = $(domCity + ':checked').val();
                    if (self.currentArea != 'undefined')
                        self.setItems(self.currentArea, domCity);
                })
        },
        methods: {
            setItems: function(area, domCity) {
                let cities = [];
                if (this.ty == 'checkbox') {
                    let el = $('#content_' + area).find(domCity + ':checked');
                    el.forEach(function(e) {
                        cities.push($(e).val());
                    }, this);
                    this.items[area] = cities;
                    if (cities.length == 0) {
                        delete this.items[area];
                    }
                } else {
                    cities.push($(domCity + ':checked').val());
                    this.items = {};
                    this.items[area] = cities;
                }
                console.log(this.ty, this.items);
                this.$emit('chooseareas', this.items);
            }
        },
        watch: {
            // 'items': {
            //     handler: function (val, oldVal) { 
            //         this.$emit('chooseareas', val);
            //     },
            //     deep: true
            // } 
        }
    }
</script>