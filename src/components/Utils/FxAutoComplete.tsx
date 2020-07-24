import React from "react";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg';
import SvgIcon from "@material-ui/core/SvgIcon";
interface FxAutoCompleteProps {
  className?: string
}

export const FxAutoComplete: React.FC<FxAutoCompleteProps> =
  (props) => (
    <div className={props.className && props.className}>
      <Autocomplete
        freeSolo
        options={data}
        getOptionLabel={(option: { title: any; }) => option.title}
        renderInput={(params) => (
          <div className="fx-autocomplete-div">
            <SvgIcon component={SearchIcon} className="fx-auto-complete-lense-icon" />
            <TextField {...params} placeholder="Search..." />
          </div>
          )
        }
      />
    </div>
  )

const data = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 }];