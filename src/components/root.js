import React, { Component } from 'react';
import { Router, Route, hashHistory,IndexRedirect,routerState} from 'react-router';

import '../static/css/bootstrap.css'
import '../static/css/public.css'
import redux from './test'

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
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }
    componentWillUnmount(){

    };
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/redux" component={redux}/>
                <Route path="/" components={home}>
                    <IndexRedirect to="/index" />
                    <Route path="/index" component={index}>
                        <IndexRedirect to="/index/console" />
                        <Route path="/index/console" component={console}/>
                        <Route path="/index/student" component={student}/>
                        <Route path="/index/teacher" component={teacher}/>
                        <Route path="/index/document" component={document}/>
                        <Route path="/index/video" component={video}/>
                    </Route>
                    <Route path="/cloud" component={cloud}>
                        <IndexRedirect to="/cloud/one" />
                        <Route path="/cloud/one" component={one}/>
                        <Route path="/cloud/more" component={more}/>
                        <Route path="/cloud/trusteeship" component={trusteeship}/>
                        <Route path="/cloud/studyingCount" component={studyingCount}/>
                        <Route path="/cloud/teachingCount" component={teachingCount}/>
                        <Route path="/cloud/courseCount" component={courseCountDetail}/>
                    </Route>
                    <Route path="/live" component={live} >
                        <IndexRedirect to="/live/Manage" />
                        <Route path="/live/manage" component={liveManage}/>
                        <Route path="/live/extend" component={liveExtend}/>
                        <Route path="/live/goods" component={liveGoods}/>
                        <Route path="/live/count" component={liveCount}/>
                        <Route path="/live/mobileCount" component={liveMobileCount}/>
                        <Route path="/live/promotion" component={livePromotion}/>
                    </Route>
                    <Route path="/online" component={online} >
                        <IndexRedirect to="/online/liveCourse" />
                        <Route path="/online/liveCourse" component={liveCourse}/>
                        <Route path="/online/columnCourse" component={columnCourse}/>
                        <Route path="/online/oneCourse" component={oneCourse}/>
                        <Route path="/online/moreCourse" component={moreCourse}/>
                        <Route path="/online/configure" component={configure}/>
                        <Route path="/online/studentCount" component={studentCount}/>
                        <Route path="/online/courseCount" component={courseCount}/>
                    </Route>
                </Route>
            </Router>
        );
    }
}
export default Root;