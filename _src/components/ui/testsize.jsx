import React from "react"
import BreadcrumbCustom from '../BreadcrumbCustom';

export default class TestSize extends React.Component{

    render() {
        return (
            <div>
                <BreadcrumbCustom first="UI" second="testsize" />
                hello
                
                <style>{`
                    .testsize-demo {
                        margin-right: 8px;
                        margin-bottom: 12px;
                    }
                `}</style>
                
            </div>
        )
    }

}