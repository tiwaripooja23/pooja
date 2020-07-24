import React from "react";
import { Grid, Typography, Popover, Button } from "@material-ui/core";
let data = [
    { isEditable: false, label: "Name", type: "text", value: "George Jedenoff", id: "id0-1", name: "name", placeholderText: "Name", className: "" },
    { isEditable: false, label: "Created", type: "date", value: "2012-12-12", format: "yyyy/dd/mm", showDays: true, id: "id0-1", name: "created", placeholderText: "Created", className: "" },
    { isEditable: false, label: "Monthly Draft", type: "number", value: "455.50", id: "id0-1", name: "monthly_draft", placeholderText: "Monthly Draft", className: "" },
    { isEditable: false, label: "SSN", type: "ssn", value: "3293", id: "id0-1", name: "ssn", placeholderText: "SSN", className: "" },
    { isEditable: false, label: "ID", type: "text", value: "24532532532", id: "id0-1", name: "id", placeholderText: "ID", className: "" },
    { isEditable: false, label: "Username", type: "text", value: "CFT-544338", id: "id0-1", name: "username", placeholderText: "Username", className: "" },
    { isEditable: false, label: "Email", type: "email", value: "george.jedenoff@gmail.com", id: "id0-1", name: "email", placeholderText: "Email", className: "" },
    { isEditable: false, label: "Home Phone", type: "phone", value: "(123)555-1293", id: "id0-1", name: "home_phone", placeholderText: "Home Phone", className: "" },
    { isEditable: false, label: "Mobile Phone", type: "phone", value: "(123)555-1293", id: "id0-1", name: "mobile_phone", placeholderText: "Mobile Phone", className: "" },
    { isEditable: false, label: "Permanent Address", type: "text", value: "1244 West New Hampshire St,Apt 1092,Santa Clarita CA 91234", id: "id0-1", name: "permanent_address", placeholderText: "Permanent Address", className: "" },
    { isEditable: false, label: "Mailing Address", type: "email", value: "1244 West New Hampshire St,Apt 1092,Santa Clarita CA 91234", id: "id0-1", name: "mailing_address", placeholderText: "Mailing Address", className: "" },
    { isEditable: false, label: "Language", type: "text", value: "English", id: "id0-1", name: "language", placeholderText: "Language", className: "" },
    { isEditable: false, label: "Lead Converted By", type: "text", value: "Andrew Salesman on Dec 12 2012", id: "id0-1", name: "lead_converted_by", placeholderText: "Lead Converted By", className: "" },
    { isEditable: false, label: "Affiliate", type: "text", value: "Webformz Inc", id: "id0-1", name: "affiliate", placeholderText: "Affiliate", className: "" },
    { isEditable: false, label: "Co-client", type: "text", value: "Gina Jedenoff", id: "id0-1", name: "co_client", placeholderText: "Co-client", className: "" },
    { isEditable: false, label: "OFAC/CIP", type: "text", value: "Passed", id: "id0-1", name: "ofac_cip", placeholderText: "OFAC/CIP", className: "" },
    { isEditable: false, label: "Payout Rules", type: "text", value: "1 Rule", id: "id0-1", name: "payout_rules", placeholderText: "Payout Rules", className: "" },
    { isEditable: false, label: "External Accounts", type: "text", value: "1 Account", id: "id0-1", name: "external_accounts", placeholderText: "External Accounts", className: "" },
    { isEditable: false, label: "Debit Cards", type: "text", value: "1 Card", id: "id0-1", name: "debit_cards", placeholderText: "Debit Cards", className: "" },
    { isEditable: false, label: "Total Debt Enrolled", type: "number", value: "7000", id: "id0-1", name: "total_debt_enrolled", placeholderText: "Total Debt Enrolled", className: "" },
    { isEditable: false, label: "Client Agreement Changes", type: "text", value: "4 changes", id: "id0-1", name: "client_agreement_changes", placeholderText: "Client Agreement Changes", className: "" },
];
interface CardData {
    isEditable: boolean;
    label: string,
    value: string | number | undefined
    type: string;
    name: string;
    placeholderText: string;
    className: string;
}
declare interface IFxInfoCard {
    id?: string;
    data?: CardData[]
}

export const FxInfoCard: React.FC<IFxInfoCard> = ({ id }) => (
    <div>
        {data?.map((info, index) => {
            return (
                <Grid container direction="row">
                    <Grid item xs={4} className="fx-info-label"  >
                        <label >{info.label}</label>
                    </Grid>
                    <Grid  className="fx-info-value" xs ={7}>
                        {info.type === 'text' &&
                            <Typography >
                                {info.value}
                            </Typography>
                        }
                        {info.type === 'ssn' &&
                            <Typography>{info.value}</Typography>
                        }
                        {info.type === 'number' &&
                            <Typography >{info.value}</Typography>
                        }
                        {info.type === 'phone' &&
                            <Typography >{info.value}
                                <FxPopOver data={info} />
                            </Typography>
                        }
                        {info.type === 'email' &&
                            <Typography >{info.value}
                                <FxPopOver data={info} />
                            </Typography>
                        }
                        {info.type === 'date' &&
                            <Typography >{info.value}</Typography>
                        }
                    </Grid>
                </Grid>
            )
        })}

    </div>
)
declare interface IFxPopOver {
    id?: string;
    data?: CardData
}
const FxPopOver: React.FC<IFxPopOver> = ({ id, data }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const popId = open ? 'simple-popover' + id : undefined;
    let listData = {
        email: [
            "Outlook", "gmail"
        ], phone: [
            "SMS", "Call"
        ]
    };

    return (
        <div>
            <div className="fx-icon-grey" onClick={handleClick}>
                <div className="fx-icon caret-icon" />
            </div>
            <Popover
                id={popId}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                PaperProps={{
                    className: "fx-popover-card"
                }}
            >
                <ul className="fx-popover-list">
                    {data?.type == "phone" && listData.phone.map((item: any) => {
                        return (
                            <li>
                                Send {item} to {data.value}
                            </li>
                        )
                    })
                    }
                    {data?.type == "email" && listData.email.map((item: any) => {
                        return (
                            <li>
                                Send Mail to {item}
                            </li>
                        )
                    })
                    }
                </ul>
            </Popover>
        </div>
    );
}
