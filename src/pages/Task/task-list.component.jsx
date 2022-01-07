import React, {useState, useEffect, useRef} from 'react';
import { connect } from 'react-redux';
import PaymentStripeComponent from "../../components/Payments/Stripe/payment.stripe.component";

import ContentContainer from "../../containers/ContentContainer";

import { LoadStateLocalStorage } from "../../actions";
import HeaderDashboardComponent from "../../components/Header/header-dasboard.component";
import LeftBarComponent from "../../components/LeftBar/left-bar.component";

const TaskList = props => {
        const { handleLoadStateLocalStorage, items, moduleId} = props;
        const [ isLocalStorageLoaded, setIsLocalStorageLoaded] = useState(false );
        const previousItemLength = useRef(null);

        useEffect(() => {
            handleLoadStateLocalStorage(moduleId);
            setIsLocalStorageLoaded(true);
        }, [handleLoadStateLocalStorage, moduleId]);

        useEffect(() => {
            if(isLocalStorageLoaded){
                if (!previousItemLength.current) {
                    previousItemLength.current = -1;
                    return;
                }

                if(items.length !== previousItemLength.current){
                    if (items.length === 0){
                        previousItemLength.current = -1;
                    } else {
                        previousItemLength.current = items.length;
                    }
                }
            }
        }, [items, isLocalStorageLoaded, moduleId]);

    return (
        <div>
            <div className="grid-container">
                <div className="menu-icon">
                    <strong> &#9776;</strong>
                </div>
                <HeaderDashboardComponent />,
                <LeftBarComponent />,
                <main className="main">
                    <div className="main_overview">
                        <PaymentStripeComponent />
                        <ContentContainer module={props.moduleId}/>
                    </div>
                </main>
            </div>
        </div>
    );
}
function mapStateToProps(state){
    const query = new URLSearchParams(window.location.search);
    return {
        items: state.tasks.items,
        moduleId: query.get("module")
    };
}

const mapDispatchToProps = {
  handleLoadStateLocalStorage: LoadStateLocalStorage
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TaskList);