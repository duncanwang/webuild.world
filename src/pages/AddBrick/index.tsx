import { connect } from "react-redux";
import { Dispatch } from "redux";

import { IBrick, IStoreState } from "../../types";
import * as actions from "./action";
import AddBrick, { IProps } from "./component";

export function mapStateToProps({
  reducer
}: {
    reducer: { app: IStoreState };
  }) {
  return { hash: reducer.app.hash };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.IAddBrick>) {
  return {
    addBrick: (brick: IBrick) => actions.postBrick(brick)(dispatch)
  };
}

export default connect<IProps>(
  mapStateToProps,
  mapDispatchToProps
)(AddBrick);
