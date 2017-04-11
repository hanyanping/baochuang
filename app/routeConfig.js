import Main from './src/main';
import Home from './src/home/home';
import Register from './src/home/register';
import Agreement from './src/home/agreement';
// 请柬
import Invitation from './src/invitation/invitation';
import InvitationCard from './src/invitation/invitationCard';
import InvitationSchool from './src/invitation/invitationSchool';
import InvitationStudent from './src/invitation/invitationStudent';
// 捐赠
import Donate from './src/donate/donate';
import DonateChronicle from './src/donate/donateChronicle'; //纪事
import DonateChronicleDetail from './src/donate/donateChronicleDetail'; //纪事详情
import DonateDonated from './src/donate/donated'; //捐赠
import DonateDetail from './src/donate/donateDetail'; //项目详情
import DonateMine from './src/donate/donateMine'; //我的捐赠记录 
import DonateNote from './src/donate/donateNote'; //公示
import DonateProject from './src/donate/donateProject'; //项目列表
// 相册
import Photo from './src/photo/photo';
import PhotoAlbums from './src/photo/photoAlbums';
import PhotoAlbumsCreate from './src/photo/photoAlbumsCreate';
import PhotoAlbumsEdit from './src/photo/PhotoAlbumsEdit';
import PhotoList from './src/photo/photoList';
import PhotoMine from './src/photo/photoMine';
// 活动
import Activity from './src/activity/activity';
import ActivityAll from './src/activity/activityAll';
import ActivityCreate from './src/activity/activityCreate';
import ActivityDetail from './src/activity/activityDetail';
import ActivityDetailMore from './src/activity/activityDetailMore';
import ActivityJoined from './src/activity/activityJoined';
import ActivityMine from './src/activity/activityMine';
import ActivityPreview from './src/activity/activityPreview';
// 互助
import Mutual from './src/mutual/mutual';
import MutualAll from './src/mutual/mutualAll'; // 全部 
import MutualCreate from './src/mutual/mutualCreate'; //创建
import MutualDetail from './src/mutual/mutualDetail'; // 详情
import MutualMine from './src/mutual/mutualMine'; // 我的
import MutualPreview from './src/mutual/mutualPreview'; //浏览
// 圈子
import Circle from './src/circle/circle';
import CircleActivities from './src/circle/circleActivities'; // 圈子活动列表 
import CircleCard from './src/circle/circleCard'; //我加入圈子的详情
import CircleCreate from './src/circle/circleCreate'; //创建圈子  
import CircleManage from './src/circle/circleManage'; // 圈子管理   
import CircleModify from './src/circle/circleModify'; // 修改圈子 
import CircleSchool from './src/circle/circleSchool'; //圈子
import CircleStudent from './src/circle/circleStudent'; //同学 
// 消息
import Message from './src/message/message';
import MessageHistory from './src/message/messageHistory';
import MessageHistoryCircle from './src/message/messageHistoryCircle';
import MessageLetter from './src/message/messageLetter';
import MessageLetter1 from './src/message/messageLetter1';
import MessageLetterCircle from './src/message/messageLetterCircle';
import MessageLetterCircle1 from './src/message/messageLetterCircle1';
import MessageNotice from './src/message/messageNotice';
import MessageReply from './src/message/messageReply';
// 个人
import Personal from './src/personal/personal'; //我的 
import PersonalFans from './src/personal/personalFans'; //我的粉丝
import PersonalFollow from './src/personal/personalFollow'; //我的关注
import PersonalInfo from './src/personal/personalInfo'; //个人信息
import PersonalPhoto from './src/personal/personalPhoto'; //个人相册
import PersonalSetting from './src/personal/personalSetting'; //个人设置

//个人名片
import Profile from './src/profile/profile';
import ProfileActivity from './src/profile/profileActivity'; //个人活动
import ProfileActivityJoined from './src/profile/profileActivityJoined'; //他参加的
import ProfileActivityMine from './src/profile/profileActivityMine'; //他主办的  
import ProfileCircle from './src/profile/profileCircle';
import ProfileFans from './src/profile/profileFans';
import ProfileFollow from './src/profile/profileFollow';
import ProfileInfo from './src/profile/profileInfo';
import ProfilePhoto from './src/profile/profilePhoto';
//杰出校友
import Schoolfellow from './src/schoolfellow/schoolfellow';
import SchoolfellowDetail from './src/schoolfellow/schoolfellowDetail';
//菁苑
import CollegeList from './src/Collegestyle/collegeList';
import CollegeListDetail from './src/Collegestyle/collegeListDetail';
const beforeEnter = (to, from, next) => {
    //  let referrer = [];
    //  if (localStorage.globalReferrer) {
    //      referrer = JSON.parse(localStorage.globalReferrer);
    //  }
    //  referrer.push(to.path);
    //  localStorage.globalReferrer = JSON.stringify(referrer); 
    //  控制跳转
    let state = {
        title: to.name,
        url: to.path
    };
    //  window.history.pushState(state, to.name, to.path);
    next();
};

export default [{
    path: '/',
    component: Main,
    children: [
        { path: '/home', name: '首页', component: Home, meta: { auth: false, visit: false, loading: false }, beforeEnter: beforeEnter },
        { path: '', redirect: '/home' },
        {
            path: '/invitation',
            component: Invitation,
            children: [
                { path: 'school', name: '校方请柬', component: InvitationSchool, meta: { auth: true, visit: false, loading: false }, beforeEnter: beforeEnter },
                { path: '', redirect: 'school' },
                { path: 'student', name: '校友请柬', component: InvitationStudent, meta: { auth: true, visit: false, loading: false }, beforeEnter: beforeEnter },
            ]
        },
        {
            path: '/donate',
            component: Donate,
            children: [
                { path: 'pro', name: '捐赠项目', component: DonateProject, meta: { auth: true, visit: false, loading: false }, beforeEnter: beforeEnter },
                { path: '', redirect: 'pro' },
                { path: 'note', name: '捐赠公示', component: DonateNote, meta: { auth: true, visit: false, loading: false }, beforeEnter: beforeEnter },
                { path: 'chronicle', name: '捐赠纪事', component: DonateChronicle, meta: { auth: true, visit: false, loading: false }, beforeEnter: beforeEnter },
                { path: 'mine', name: '捐赠记录', component: DonateMine, meta: { auth: true, visit: false, loading: false }, beforeEnter: beforeEnter },
            ]
        },
        {
            path: '/photo',
            component: Photo,
            children: [
                { path: 'albums', name: '相册', component: PhotoAlbums, meta: { auth: true, visit: false, loading: false }, beforeEnter: beforeEnter },
                { path: '', redirect: 'albums' },
                { path: 'mine', name: '我的照片', component: PhotoMine, meta: { auth: true, visit: false, loading: false }, beforeEnter: beforeEnter }
            ]
        },
        {
            path: '/activity',
            component: Activity,
            children: [
                { path: 'all', name: '全部活动', component: ActivityAll, meta: { auth: true, visit: false, loading: false }, beforeEnter: beforeEnter },
                { path: '', redirect: 'all' },
                { path: 'mine', name: '我主办的', component: ActivityMine, meta: { auth: true, visit: false, loading: false }, beforeEnter: beforeEnter },
                { path: 'joined', name: '我参加的', component: ActivityJoined, meta: { auth: true, visit: false, loading: false }, beforeEnter: beforeEnter },
            ]
        },
        {
            path: '/mutual',
            component: Mutual,
            children: [
                { path: 'all/:type', name: '全部帖子', component: MutualAll, meta: { auth: true, visit: false, loading: false }, beforeEnter: beforeEnter },
                { path: '', redirect: 'all/0' },
                { path: 'mine', name: '我的帖子', component: MutualMine, meta: { auth: true, visit: false, loading: false }, beforeEnter: beforeEnter }
            ]
        },
        {
            path: '/circle',
            component: Circle,
            children: [
                { path: 'school', name: '校友会', component: CircleSchool, meta: { auth: true, visit: true, loading: false }, beforeEnter: beforeEnter },
                { path: '', redirect: 'school' },
                { path: 'student', name: '同学', component: CircleStudent, meta: { auth: true, visit: true, loading: false }, beforeEnter: beforeEnter },

            ]
        },
        { path: '/message', name: '消息', component: Message, meta: { auth: true, visit: false, loading: false }, beforeEnter: beforeEnter },
        { path: '/personal', name: '个人资料', component: Personal, meta: { auth: true, visit: false, loading: false }, beforeEnter: beforeEnter },
    ]
},
// 验证
{ path: '/register', name: '注册', component: Register, meta: { auth: false, visit: false, loading: false }, beforeEnter: beforeEnter },
{ path: '/agree', name: '协议', component: Agreement, meta: { auth: false, visit: false, loading: false }, beforeEnter: beforeEnter },
// 邀请 
{ path: '/invitationSchoolCard/:id', name: '邀请函', component: InvitationCard, meta: { auth: true, visit: false, loading: false }, beforeEnter: beforeEnter },
// 捐赠
{ path: '/donated/:id', name: '捐赠', component: DonateDonated, meta: { auth: true, visit: false, loading: false }, beforeEnter: beforeEnter },
{ path: '/donateDetail/:id', name: '项目详情', component: DonateDetail, meta: { auth: true, visit: false, loading: false }, beforeEnter: beforeEnter },
{ path: '/chronicledetail/:id', name: '记事详情', component: DonateChronicleDetail, meta: { auth: true, visit: false, loading: false }, beforeEnter: beforeEnter },
// 拾忆
{ path: '/albumsCreate', name: '创建相册', component: PhotoAlbumsCreate, meta: { auth: true, visit: true, loading: false }, beforeEnter: beforeEnter },
{ path: '/albumsEdit/:id', name: '相册维护', component: PhotoAlbumsEdit, meta: { auth: true, visit: true, loading: false }, beforeEnter: beforeEnter },
{ path: '/photoList/:id', name: '相册照片', component: PhotoList, meta: { auth: true, visit: true, loading: false }, beforeEnter: beforeEnter },
// 活动 
{ path: '/activityDetail/:id', name: '活动详情', component: ActivityDetail, meta: { auth: true, visit: true, loading: false }, beforeEnter: beforeEnter },
{ path: '/activityDetailMore/:id', name: '已报名人员', component: ActivityDetailMore, meta: { auth: true, visit: true, loading: false }, beforeEnter: beforeEnter },
{ path: '/activityCreate', name: '创建活动', component: ActivityCreate, meta: { auth: true, visit: true, loading: false }, beforeEnter: beforeEnter },
{ path: '/activityPreview', name: '活动预览', component: ActivityPreview, meta: { auth: true, visit: true, loading: false }, beforeEnter: beforeEnter },
// 互助 
{ path: '/mutualDetail/:id', name: '互助详情', component: MutualDetail, meta: { auth: true, visit: true, loading: false }, beforeEnter: beforeEnter },
{ path: '/mutualCreate/:category_id', name: '创建互助', component: MutualCreate, meta: { auth: true, visit: true, loading: false }, beforeEnter: beforeEnter },
{ path: '/mutualPreview/:id', name: '互助预览', component: MutualPreview, meta: { auth: true, visit: true, loading: false }, beforeEnter: beforeEnter },
// 圈子 
{ path: '/circleCreate', name: '创建圈子', component: CircleCreate, meta: { auth: true, visit: true, loading: false }, beforeEnter: beforeEnter },
{ path: '/circleModify/:id', name: '修改圈子', component: CircleModify, meta: { auth: true, visit: true, loading: false }, beforeEnter: beforeEnter },
{ path: '/circleActivities/:id', name: '圈子活动列表', component: CircleActivities, meta: { auth: true, visit: true, loading: false }, beforeEnter: beforeEnter },
{ path: '/circleCard/:id', name: '圈子信息', component: CircleCard, meta: { auth: true, visit: true, loading: false }, beforeEnter: beforeEnter },
{ path: '/circleManage/:id', name: '圈子管理', component: CircleManage, meta: { auth: true, visit: true, loading: false }, beforeEnter: beforeEnter },
// 消息 
{ path: '/messageLetter/:id', name: '私信消息', component: MessageLetter, meta: { auth: true, visit: true, loading: false }, beforeEnter: beforeEnter },
{ path: '/messageLetterCircle/:id', name: '圈子消息', component: MessageLetterCircle, meta: { auth: true, visit: true, loading: false }, beforeEnter: beforeEnter },
{ path: '/messageLetter1/:id', name: '私信消息1', component: MessageLetter1, meta: { auth: true, visit: true, loading: false }, beforeEnter: beforeEnter },
{ path: '/messageLetterCircle1/:id', name: '圈子消息1', component: MessageLetterCircle1, meta: { auth: true, visit: true, loading: false }, beforeEnter: beforeEnter },
{ path: '/messageNotice', name: '消息通知', component: MessageNotice, meta: { auth: true, visit: true, loading: false }, beforeEnter: beforeEnter },
{ path: '/messageReply', name: '评论与赞', component: MessageReply, meta: { auth: true, visit: true, loading: false }, beforeEnter: beforeEnter },
{ path: '/messageHistory/:id', name: '私信历史消息', component: MessageHistory, meta: { auth: true, visit: true, loading: false }, beforeEnter: beforeEnter },
{ path: '/messageHistoryCircle/:id', name: '圈子历史消息', component: MessageHistoryCircle, meta: { auth: true, visit: true, loading: false }, beforeEnter: beforeEnter },
// 我的 
{ path: '/personalInfo', name: '个人信息', component: PersonalInfo, meta: { auth: true, visit: false, loading: false }, beforeEnter: beforeEnter },
{ path: '/personalPhoto', name: '我的相册', component: PersonalPhoto, meta: { auth: true, visit: true, loading: false }, beforeEnter: beforeEnter },
{ path: '/personalFans', name: '我的粉丝', component: PersonalFans, meta: { auth: true, visit: true, loading: false }, beforeEnter: beforeEnter },
{ path: '/personalFollow', name: '我的关注', component: PersonalFollow, meta: { auth: true, visit: true, loading: false }, beforeEnter: beforeEnter },
{ path: '/personalSetting', name: '我的设置', component: PersonalSetting, meta: { auth: true, visit: false, loading: false }, beforeEnter: beforeEnter },
// 个人名片
{
    path: '/profile/:userId',
    component: Profile,
    children: [
        { path: 'info', name: '个人名片', component: ProfileInfo, meta: { auth: true, visit: true, loading: false }, beforeEnter: beforeEnter },
        { path: '', redirect: 'info' },
        { path: 'circle', name: '个人圈子', component: ProfileCircle, meta: { auth: true, visit: true, loading: false }, beforeEnter: beforeEnter },
        { path: 'fans', name: '个人粉丝', component: ProfileFans, meta: { auth: true, visit: true, loading: false }, beforeEnter: beforeEnter },
        { path: 'follow', name: '个人关注', component: ProfileFollow, meta: { auth: true, visit: true, loading: false }, beforeEnter: beforeEnter },
        { path: 'photo', name: '个人照片', component: ProfilePhoto, meta: { auth: true, visit: true, loading: false }, beforeEnter: beforeEnter },
    ]
},
//  个人活动
{
    path: '/profileActivity/:userId',
    component: ProfileActivity,
    children: [
        { path: 'joined', name: '他参加的', component: ProfileActivityJoined, meta: { auth: true, visit: true, loading: false }, beforeEnter: beforeEnter },
        { path: '', redirect: 'joined' },
        { path: 'mine', name: '他主办的', component: ProfileActivityMine, meta: { auth: true, visit: true, loading: false }, beforeEnter: beforeEnter },
    ]
},
//杰出校友
{ path: '/schoolfellow', name: '杰出校友', meta: { auth: true, visit: false, loading: false }, component: Schoolfellow },
{ path: '/schoolfellowDetail/:id', name: '杰出校友详情', meta: { auth: true, visit: true, loading: false }, component: SchoolfellowDetail },
//菁苑
{ path: '/collegeList', name: '菁苑风采', meta: { auth: true, visit: false, loading: false }, component: CollegeList },
{ path: '/collegeListDetail/:id', name: '菁苑风采详情', meta: { auth: true, visit: true, loading: false }, component: CollegeListDetail }
];