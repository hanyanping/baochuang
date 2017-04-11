import item from '../../api/mutual';
import * as types from '../mutation-types';

const state = {
    all: [], //列表内容
    detail: {}, //详情  
}

const getters = {
    mutualList: state => state.all,
    detail: state => state.detail,
}

const actions = {
    getMutualCategories({ commit }) {
        item.getCategories(datas => {
            commit(types.mutual.RECEIVCE_CATEGORIES, { datas });
        })
    },
    getMutualAll({ commit }) {
        item.getMutualAll(datas => {
            commit(types.mutual.RECEIVCE_DATAS, { datas });
        })
    },
    getMutualMine({ commit }) {
        item.getMutualMine(datas => {
            commit(types.mutual.RECEIVCE_MINE, { datas });
        })
    },


    getMutualDetail({ commit }, id) {
        item.getMutualDetail(id, (datas) => {
            commit(types.mutual.DETAIL_DATAS, { datas });
        })
    },
    //--- 删除互助
    // deleteAct({commit}, id) {
    //     item.DeleteAct(id, (datas) => {
    //         commit(types.mutual.DELETE_DATAS, { datas });
    //     })
    // },
    // //--- 添加活动
    // createAct({commit}, params) {
    //     item.CreateAct(params, (datas) => {
    //         commit(types.mutual.CREATE_DATAS, { datas });
    //     })
    // },
    // openCreateAct({commit}) {
    //     commit(types.mutual.OPEN_CREATE_DATAS);
    // },
    // reviewAct({commit}, params) {
    //     commit(types.mutual.REVIEW_DATAS, { params });
    // },
    // //--- 报名
    // joinAct({commit}, id) {
    //     item.OkJoined(id, (datas) => {
    //         commit(types.mutual.OK_JOINED, { datas });
    //     })
    // },
    // cancelAct({commit}, id) {
    //     item.CancelJoined(id, (datas) => {
    //         commit(types.mutual.CANCEL_JOINED, { datas });
    //     })
    // },
    // //--- 评论
    // addReply({commit}, params) {
    //     item.AddReply(params, (datas) => {
    //         commit(types.mutual.ADD_REPLY, { datas });
    //     })
    // },
    // updateReply({commit}, params) {
    //     item.UpdateReply(params, (datas) => {
    //         commit(types.mutual.UPDATE_REPLY, { datas });
    //     })
    // },
    // deleteReply({commit}, id) {
    //     item.DeleteReply(id, (datas) => {
    //         commit(types.mutual.DELETE_REPLY, { datas });
    //     })
    // },
}

const mutations = {
    [types.mutual.RECEIVCE_DATAS](state, { datas }) {
        state.all = datas;
        let now = new Date();
        state.running = datas.end_time > now;
    },
    [types.mutual.RECEIVCE_MINE](state, { datas }) {
        state.all = datas;
    },
    [types.mutual.RECEIVCE_JOINED](state, { datas }) {
        state.all = datas;
    },
    [types.mutual.DETAIL_DATAS](state, { datas }) {
        state.detail = datas;
        state.countTalk = datas.replies.length;
        state.countPerson = datas.joins.length;
    },
    //---创建与删除活动
    [types.activity.CREATE_DATAS](state, { datas }) {
        //创建保存后,将清空缓存数据
        localStorage.mutualPreview = null;
    },
    [types.activity.OPEN_CREATE_DATAS](state) {
        //打开添加页面,查看缓存
        let data = JSON.parse(localStorage.mutualPreview);
        if (data) {
            if (data.act.title != '') {
                state.activityContent.act = data.act;
                state.activityContent.headPic = data.headPic;
                state.activityContent.pics = data.pics;
            }
        }
    },
    [types.activity.DELETE_DATAS](state, { datas }) {
        //跳转到我创建的活动列表页面
    },
    [types.activity.REVIEW_DATAS](state, { params }) {
        //缓存
        localStorage.mutualPreview = JSON.stringify(params);
    },
    //---报名
    [types.activity.OK_JOINED](state, { datas }) {
        state.detail.joined = 1;
    },
    [types.activity.CANCEL_JOINED](state, { datas }) {
        state.detail.joined = 0;
    },
    //---评论
    [types.activity.ADD_REPLY](state, { datas }) {
        // state.detail = datas;
        // state.countPerson = datas.joins.length;
        state.detail.replies.push({
            id: datas.id,
            fullname: datas.fullname,
            avatar: datas.avatar,
            reply_user_id: datas.reply_user_id,
            content: datas.content,
            updated_at: datas.updated_at,
            created_at: datas.created_at,

        });
    },
    [types.activity.UPDATE_REPLY](state, { datas }) {
        state.detail.joined = 1;
    },
    [types.activity.DELETE_REPLY](state, { datas }) {
        state.detail.joined = 0;
    },

}

export default {
    state,
    getters,
    actions,
    mutations
}