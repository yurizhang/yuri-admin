/**
 * Created by Yuri Zhang  2017/8/13.
 */
import React, { Component } from 'react';
// import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import { Route, Redirect, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import BasicForm from '../components/forms/BasicForm';


import Icons from '../components/ui/Icons';
import Buttons from '../components/ui/Buttons';
//import Spins from '../components/ui/Spins';
import Modals from '../components/ui/Modals';
import Notifications from '../components/ui/Notifications';
import Tabs from '../components/ui/Tabs';
//import Banners from '../components/ui/banners';
//import Drags from '../components/ui/Draggable';

//import Gallery from '../components/ui/Gallery';


//import AuthBasic from '../components/auth/Basic';
//import RouterEnter from '../components/auth/RouterEnter';
//import Wysiwyg from 'bundle-loader?lazy!../components/ui/Wysiwyg';  // 按需加载富文本配置
import Bundle from '../components/widget/BundlePro';
import asyncComponent from '../components/widget/BundlePro2';
//import Cssmodule from '../components/cssmodule';


// 按需加载Button配置
const ButtonsBundle = (props) => (
    <Bundle load={() => import('../components/ui/Buttons')}>
        {(ButtonsBundle) => <ButtonsBundle {...props} />}
    </Bundle>
);

const ButtonsBundle2 = asyncComponent(() => import("../components/ui/Buttons"));

// 按路由拆分代码

const MyLoadingComponent = ({ isLoading, error }) => {
    // Handle the loading state
    if (isLoading) {
        return <div>Loading...</div>;
    }
    // Handle the error state
    else if (error) {
        return <div>Sorry, there was a problem loading the page.</div>;
    }
    else {
        return null;
    }
};
const ButtonsBundle33 = Loadable({
    loader: () => import('../components/ui/Buttons'),
    loading: MyLoadingComponent
});

const IconsBundle33 = Loadable({
    loader: () => import('../components/ui/Icons'),
    loading: MyLoadingComponent
});


class ButtonsBundle3 extends React.Component {
    render() {
      return <ButtonsBundle33 />;
    }
}
class IconsBundle extends React.Component {
    render() {
      return <IconsBundle33 />;
    }
}


export default class CRouter extends Component {
    requireAuth = (permission, component) => {
        const { auth } = this.props;
        const { permissions } = auth.data;
        // const { auth } = store.getState().httpData;
        if (!permissions || !permissions.includes(permission)) return <Redirect to={'404'} />;
        return component;
    };
    render() {
        return (
            
            <Switch>
                <Route exact path="/" component={BasicForm} />
                <Route exact path="/app/form/basicForm" component={BasicForm} />
                <Route exact path="/app/ui/icons" component={IconsBundle} />
                <Route exact path="/app/ui/buttons" component={ButtonsBundle3} />
                {/* <Route exact path="/app/ui/spins" component={Spins} /> */}
                <Route exact path="/app/ui/modals" component={Modals} />
                <Route exact path="/app/ui/notifications" component={Notifications} />
                <Route exact path="/app/ui/tabs" component={Tabs} />
                {/* <Route exact path="/app/ui/banners" component={Banners} /> */}
              
                {/* <Route exact path="/app/ui/drags" component={Drags} /> */}
                {/* <Route exact path="/app/ui/gallery" component={Gallery} /> */}

            

                {/* <Route exact path="/app/auth/basic" component={AuthBasic} />
                <Route exact path="/app/auth/routerEnter" component={(props) => this.requireAuth('auth/testPage', <RouterEnter {...props} />)} />

                <Route exact path="/app/cssModule" component={Cssmodule} /> */}

               

                <Route render={() => <Redirect to="/404" />} />
            </Switch>
        )
    }
}