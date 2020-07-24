import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { State, PageStatus } from "../../libs/reducer/rootReducer";
import { PageActions } from "../../libs/reducer/pageReducer";
import { useParams } from "react-router";
import { getComponent } from "../../libs/dictionary";

interface PageProps {
  id: string;
}

interface FxFxAbstractComponentProps {
  id: string;
  config?: any;
  components?: FxFxAbstractComponentProps[];
  events?: any;
}

/**
 * rendering portal, so just looping though the compoenents at top level.
 * @param config
 */
function renderPage(config: any) {
  return config.components.map((component: FxFxAbstractComponentProps) => {
    return render(component);
  });
}
function isValidComponent(comp) {
  return React.isValidElement(React.createElement(comp, {}));
}
function render(config: FxFxAbstractComponentProps): any {
  const component = config.id;
  console.log("rendering ", component);
  const element = component ? getComponent(component) : null;
  if (component && element && isValidComponent(element)) {
    return React.createElement(
      element,
      {
        key: config.id,
        id: config.id
      },
      config.components &&
        (typeof config.components === "string"
          ? config.components
          : config.components.map((c: FxFxAbstractComponentProps) => render(c)))
    );
  } else {
    console.log("!!!ignoreing ", element);
  }
  //return <div> Rendering failed for {component} </div>;
}

export const FxPage: React.FC<PageProps> = props => {
  const page = useSelector((state: State) => state.config.page[props.id]);
  const state = useSelector((state: State) => state);
  const dispatch = useDispatch();
  const params = useParams();

  if (!page || page.status === PageStatus.PENDING) {
    //console.log("page is not ready, so firing saga", state, props.id);
    dispatch({
      type: PageActions.PAGE_LOAD,
      payload: { id: props.id }
    });
    return <div>loading..</div>;
  }
  if (page && page.status === PageStatus.CONTEXT_PENDING) {
    //console.log("Page JSON is ready, buidling context", state, props.id);
    dispatch({
      type: PageActions.PAGE_LOAD,
      payload: { id: props.id }
    });
    return <div>building context..</div>;
  }
  if (page && page.params !== params) {
    // set the page params.
    dispatch({
      type: PageActions.PAGE_PARAMS_SET,
      payload: { fri: props.id, params: params }
    });
  }
  return (
    <div>
      {page && page.status === PageStatus.CONTEXT_READY && (
        <div>
          start
          <div>{renderPage(page.data)}</div>
          end
        </div>
      )}
    </div>
  );
};

/***
 * / -> fri://page/leadlist
 * /lead/{id} -> fri://page/leadview param(id)
 * /debt/{id} -> fri://page/debtview param(id)
 * /debt       -> fri://page/debtlist param(id) exact
 *
 * */
/**
 * <Router>
 *  <Switch>
 *    <Route path="/" children={<FxPage fri="fri://page/leadlist" param=""/>} />
 *    <Route path="/lead/:id" children={<FxPage fri="fri://page/leadview" param="id"/>} />
 *    <Route path="/debt/:id" children={<FxPage fri="fri://page/debtview" param="id"/>} />
 *    <Route path="/debt" exact="true" children={<FxPage fri="fri://page/debtview" param="id"/>} />
 *   </Switch>
 * </Router>
 */
