import React, { Component } from 'react';
import { Router, Route, hashHistory,IndexRedirect} from 'react-router';

import '../static/css/bootstrap.css'
import '../static/css/public.css'
import redux from './test/test'
import input from './test/input'
import testHttp from './test/testHttp'
import testRouter from './test/testRouter'
import testRedux from './test/testRedux'

import home from './home';
import index from './index';
import cloud from './cloud';
import live from './live';
import online from './online';

import console from './index/console';
import student from './index/student';
import teacher from './index/teacher';
import document from './index/document';
import video from './index/video';

import one from './cloud/one';
import more from './cloud/more';
import trusteeship from './cloud/trusteeship';
import studyingCount from './cloud/studyingCount';
import teachingCount from './cloud/teachingCount';
import courseCountDetail from './cloud/courseCount';

import liveManage from './live/liveManage';
import liveExtend from './live/liveExtend';
import liveGoods from './live/liveGoods';
import liveCount from './live/liveCount';
import liveMobileCount from './live/liveMobileCount';
import livePromotion from './live/livePromotion';

import liveCourse from './online/liveCourse';
import columnCourse from './online/columnCourse';
import oneCourse from './online/oneCourse';
import moreCourse from './online/moreCourse';
import configure from './online/configure';
import studentCount from './online/studentCount';
import courseCount from './online/courseCount';

class Root extends Component{
    componentDidMount() {

    }
    componentWillUnmount(){

    };
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/redux" component={redux}/>
                <Route path="/input" component={input}/>
                <Route path="/testRouter" component={testRouter}/>
                <Route path="/testHttp" component={testHttp}/>
                <Route path="/testRedux" component={testRedux}/>
                <Route path="/" components={home}>
                    <IndexRedirect to="/index" />
                    <Route path="/index" component={index}>
                        <IndexRedirect to="/index/console" />
                        <Route path="console" component={console}/>
                        <Route path="student" component={student}/>
                        <Route path="teacher" component={teacher}/>
                        <Route path="document" component={document}/>
                        <Route path="video" component={video}/>
                    </Route>
                    <Route path="/cloud" component={cloud}>
                        <IndexRedirect to="/cloud/one" />
                        <Route path="one" component={one}/>
                        <Route path="more" component={more}/>
                        <Route path="trusteeship" component={trusteeship}/>
                        <Route path="studyingCount" component={studyingCount}/>
                        <Route path="teachingCount" component={teachingCount}/>
                        <Route path="courseCount" component={courseCountDetail}/>
                    </Route>
                    <Route path="/live" component={live} >
                        <IndexRedirect to="/live/Manage" />
                        <Route path="manage" component={liveManage}/>
                        <Route path="extend" component={liveExtend}/>
                        <Route path="goods" component={liveGoods}/>
                        <Route path="count" component={liveCount}/>
                        <Route path="mobileCount" component={liveMobileCount}/>
                        <Route path="promotion" component={livePromotion}/>
                    </Route>
                    <Route path="/online" component={online} >
                        <IndexRedirect to="/online/liveCourse" />
                        <Route path="liveCourse" component={liveCourse}/>
                        <Route path="columnCourse" component={columnCourse}/>
                        <Route path="oneCourse" component={oneCourse}/>
                        <Route path="moreCourse" component={moreCourse}/>
                        <Route path="configure" component={configure}/>
                        <Route path="studentCount" component={studentCount}/>
                        <Route path="courseCount" component={courseCount}/>
                    </Route>
                </Route>
            </Router>
        );
    }
}
export default Root;