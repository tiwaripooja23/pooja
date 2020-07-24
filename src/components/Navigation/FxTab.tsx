import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs, { TabsProps } from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { ToString } from 'yargs';


interface FxTabProps extends TabsProps
{
  tabItems?:{url:string,title:string}[];
  className?:string;
}
const FxTab: React.FC<FxTabProps> = ({tabItems, className}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
 
  return (
    <div className = {className ? className : ""}>
    <Paper>
      <Tabs
        value={value}
        onChange={handleChange}
      >
        {tabItems && tabItems.map((item) => 
          <Tab label={item.title} />
        )}
      </Tabs>
    </Paper>
    </div>
  )
}

export default FxTab;