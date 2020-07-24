export enum DataSourceType {
  INLINE,
  API
}

export interface DataSource {
  type: DataSourceType;
  api?: string;
  data?: any;
  status: number;
}

export class SourceProcessor {
  static process(
    state: any,
    componentId: any,
    dispatch: any,
    transformer: any = null
  ) {
    const source = state.config.source;

    if (source.status === 1) {
      console.log("Already loaded");
      return;
    }

    if (source.type === DataSourceType.INLINE) {
      // data is alreadt there, just set to /contet/{id}/data
      dispatch({
        type: "CONTEXT_COMPONENT_UPDATE_DATA",
        payload: { id: componentId, data: source.data }
      });
    } else if (source.type === DataSourceType.API) {
      dispatch({
        type: "GET_API",
        payload: {
          transformer: transformer,
          url: source.api,
          id: componentId,
          data: source.data
        }
      });
    }
  }
}
