import  { useState } from 'react';
import { List, ListItem, ListItemText, Collapse, ListItemIcon } from '@mui/material';
import {
  Dashboard,
  People,
  Work,
  MonetizationOn,
  ExpandLess,
  ExpandMore,
  AccountBalance,
  Description,
  Assessment,
  Settings,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [openFinance, setOpenFinance] = useState(false);
  const [openHR, setOpenHR] = useState(false);
  const [openRecruit, setOpenRecruit] = useState(false);

  const handleFinanceClick = () => {
    setOpenFinance(!openFinance);
  };

  const handleHRClick = () => {
    setOpenHR(!openHR);
  };

  const handleRecruitClick = () => {
    setOpenRecruit(!openRecruit);
  };

  return (
    <div className="bg-[#091143] text-whit">
      <div className="flex-col mb-4">
        <h3>Digital Ipsum<br /><span style={{ fontSize: "15px" }}>Nikhil</span></h3>
      </div>
      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemIcon><Dashboard className="text-white" /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/leads">
          <ListItemIcon><People className="text-white" /></ListItemIcon>
          <ListItemText primary="Leads" />
        </ListItem>
        <ListItem button component={Link} to="/clients">
          <ListItemIcon><Work className="text-white" /></ListItemIcon>
          <ListItemText primary="Clients" />
        </ListItem>
        <ListItem button onClick={handleHRClick}>
          <ListItemIcon><People className="text-white" /></ListItemIcon>
          <ListItemText primary="HR" />
          {openHR ? <ExpandLess className="text-white" /> : <ExpandMore className="text-white" />}
        </ListItem>
        <Collapse in={openHR} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/hr/employees">
              <ListItemText inset primary="Employees" />
            </ListItem>
            <ListItem button component={Link} to="/hr/attendance">
              <ListItemText inset primary="Attendance" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button component={Link} to="/work">
          <ListItemIcon><Work className="text-white" /></ListItemIcon>
          <ListItemText primary="Work" />
        </ListItem>
        <ListItem button onClick={handleFinanceClick}>
          <ListItemIcon><MonetizationOn className="text-white" /></ListItemIcon>
          <ListItemText primary="Finance" />
          {openFinance ? <ExpandLess className="text-white" /> : <ExpandMore className="text-white" />}
        </ListItem>
        <Collapse in={openFinance} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/finance/proposal">
              <ListItemText inset primary="Proposal" />
            </ListItem>
            <ListItem button component={Link} to="/finance/estimates">
              <ListItemText inset primary="Estimates" />
            </ListItem>
            <ListItem button component={Link} to="/finance/invoices">
              <ListItemText inset primary="Invoices" />
            </ListItem>
            <ListItem button component={Link} to="/finance/payments">
              <ListItemText inset primary="Payments" />
            </ListItem>
            <ListItem button component={Link} to="/finance/credit-note">
              <ListItemText inset primary="Credit Note" />
            </ListItem>
            <ListItem button component={Link} to="/finance/expenses">
              <ListItemText inset primary="Expenses" />
            </ListItem>
            <ListItem button component={Link} to="/finance/bank-account">
              <ListItemText inset primary="Bank Account" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button component={Link} to="/products">
          <ListItemIcon><AccountBalance className="text-white" /></ListItemIcon>
          <ListItemText primary="Products" />
        </ListItem>
        <ListItem button component={Link} to="/orders">
          <ListItemIcon><Description className="text-white" /></ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>
        <ListItem button component={Link} to="/tickets">
          <ListItemIcon><Description className="text-white" /></ListItemIcon>
          <ListItemText primary="Tickets" />
        </ListItem>
        <ListItem button component={Link} to="/events">
          <ListItemIcon><Description className="text-white" /></ListItemIcon>
          <ListItemText primary="Events" />
        </ListItem>
        <ListItem button component={Link} to="/messages">
          <ListItemIcon><Description className="text-white" /></ListItemIcon>
          <ListItemText primary="Messages" />
        </ListItem>
        <ListItem button component={Link} to="/notice-board">
          <ListItemIcon><Description className="text-white" /></ListItemIcon>
          <ListItemText primary="Notice Board" />
        </ListItem>
        <ListItem button component={Link} to="/knowledge-base">
          <ListItemIcon><Description className="text-white" /></ListItemIcon>
          <ListItemText primary="Knowledge Base" />
        </ListItem>
        <ListItem button component={Link} to="/payroll">
          <ListItemIcon><Assessment className="text-white" /></ListItemIcon>
          <ListItemText primary="Payroll" />
        </ListItem>
        <ListItem button onClick={handleRecruitClick}>
          <ListItemIcon><People className="text-white" /></ListItemIcon>
          <ListItemText primary="Recruit" />
          {openRecruit ? <ExpandLess className="text-white" /> : <ExpandMore className="text-white" />}
        </ListItem>
        <Collapse in={openRecruit} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button component={Link} to="/recruit/job-openings">
              <ListItemText inset primary="Job Openings" />
            </ListItem>
            <ListItem button component={Link} to="/recruit/candidates">
              <ListItemText inset primary="Candidates" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button component={Link} to="/reports">
          <ListItemIcon><Assessment className="text-white" /></ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>
        <ListItem button component={Link} to="/accounting">
          <ListItemIcon><Assessment className="text-white" /></ListItemIcon>
          <ListItemText primary="Accounting" />
        </ListItem>
        <ListItem button component={Link} to="/marketing">
          <ListItemIcon><Assessment className="text-white" /></ListItemIcon>
          <ListItemText primary="Marketing" />
        </ListItem>
        <ListItem button component={Link} to="/settings">
          <ListItemIcon><Settings className="text-white" /></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
