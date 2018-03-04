/**
 * Created by Yuri Zhang  2017/8/13.
 */
import React, { Component } from 'react';
// import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import { Route, Redirect, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import notFound from '../components/pages/NotFound.jsx'

//import BasicForm from '../components/forms/BasicForm';

//import Icons from '../components/ui/Icons';
//import Buttons from '../components/ui/Buttons';
//import Spins from '../components/ui/Spins';
//import Modals from '../components/ui/Modals';
//import Notifications from '../components/ui/Notifications';
//import Tabs from '../components/ui/Tabs';
//import Banners from '../components/ui/banners';
//import Drags from '../components/ui/Draggable';

//import Gallery from '../components/ui/Gallery';


//import AuthBasic from '../components/auth/Basic';
//import RouterEnter from '../components/auth/RouterEnter';
//import Wysiwyg from 'bundle-loader?lazy!../components/ui/Wysiwyg';  // 按需加载富文本配置
//import Bundle from '../components/widget/BundlePro';
//import asyncComponent from '../components/widget/BundlePro2';
//import Cssmodule from '../components/cssmodule';


// 按需加载Button配置老方式
// const ButtonsBundle = (props) => (
//     <Bundle load={() => import('../components/ui/Buttons')}>
//         {(ButtonsBundle) => <ButtonsBundle {...props} />}
//     </Bundle>
// );

// 按需加载Button配置新方式
//const ButtonsBundle2 = asyncComponent(() => import("../components/ui/Buttons"));
//const IconsBundle2 = asyncComponent(() => import("../components/ui/Icons"));


// 按路由拆分代码
//react-loadable
/* package.json中
   "plugins": [
      ["import", [{"libraryName": "antd", "style": "css" }]],
      ["syntax-dynamic-import"]
    ]
*/
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

const ColorBundle33 = Loadable({
    loader:()=> import('../components/ui/Colors'),
    loading:MyLoadingComponent
});
const FormEleBundle33 = Loadable({
    loader:()=> import('../components/ui/FormElement'),
    loading:MyLoadingComponent
});
const ModalsBundle33 = Loadable({
    loader: () => import('../components/ui/Modals'),
    loading: MyLoadingComponent
});

const Notifications = Loadable({
    loader: () => import('../components/ui/Notifications'),
    loading: MyLoadingComponent
});

const Tabs = Loadable({
    loader: () => import('../components/ui/Tabs'),
    loading: MyLoadingComponent
});
const BasicForm = Loadable({
    loader: () => import('../components/forms/BasicForm'),
    loading: MyLoadingComponent
});

const TestSize = Loadable({
    loader: () => import('../components/ui/testsize'),
    loading: MyLoadingComponent
});


// class ButtonsBundle3 extends React.Component {
//     render() {
//       return <ButtonsBundle33 />;
//     }
// }
// class IconsBundle3 extends React.Component {
//     render() {
//       return <IconsBundle33 />;
//     }
// }


export default class CRouter extends Component {
    requireAuth = (permission, component) => {
        const { auth } = this.props;
        const { permissions } = auth.data;
        // const { auth } = store.getState().httpData;
        if (!permissions || !permissions.includes(permission)) return <Redirect to={'404'} />;
        return component;
    };
    render() {
        //let changeBread=this.props.changeBread; 这个从admin.jsx传来
        //console.log("CRouter");
        //console.log(changeBread);
        //可以把任意的组件渲染到这里来，withRouter（组件名）一下就可以。如果不使用withRouter，那组件必须包括在hashRouter或是borwserouter里面
        return (

            <Switch>
                <Route exact path="/" component={BasicForm} />
                <Route exact path="/app/form/basicForm" component={BasicForm} />
                <Route exact path="/app/ui/colors" component={ColorBundle33} />
                <Route exact path="/app/form/formElements" render={(props)=> <FormEleBundle33 changeBread={this.props.changeBread} {...props} />} />
                <Route exact path="/app/ui/icons" render={(props)=>  <IconsBundle33 changeBread={this.props.changeBread} {...props} />} />
                <Route exact path="/app/ui/buttons" render={(props)=>  <ButtonsBundle33 changeBread={this.props.changeBread} {...props} />} />
                {/* 这个从admin.jsx传来，注意这里是render */}
                {/* <Route exact path="/app/ui/spins" component={Spins} /> */}
                <Route exact path="/app/ui/modals" component={ModalsBundle33} />
                <Route exact path="/app/ui/notifications" component={Notifications} />
                <Route exact path="/app/ui/tabs" component={Tabs} />
                <Route exact path="/app/ui/testsize" component={TestSize} />
                {/* <Route exact path="/app/ui/banners" component={Banners} /> */}

                {/* <Route exact path="/app/ui/drags" component={Drags} /> */}
                {/* <Route exact path="/app/ui/gallery" component={Gallery} /> */}



                {/* <Route exact path="/app/auth/basic" component={AuthBasic} />
                <Route exact path="/app/auth/routerEnter" component={(props) => this.requireAuth('auth/testPage', <RouterEnter {...props} />)} />

                <Route exact path="/app/cssModule" component={Cssmodule} /> */}
                  <Route exact path="/404" component={notFound} />


                <Route render={() => <Redirect to="/404" />} />
            </Switch>
        )
    }
}
