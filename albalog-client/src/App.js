import AdminHeader from 'components/admin/AdminHeader/AdminHeader';
import NoticeList from 'pages/notice/NoticeList/NoticeList';
import NoticeDetail from 'pages/notice/NoticeDetail/NoticeDetail';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NoticeUpload from 'pages/notice/NoticeUpload/NoticeUpload';

const App = () => {
  return (
    <div id="container">
      <AdminHeader />
      <div id="main">
        <Switch>
          <Route path="/notice" exact component={NoticeList} />
          <Route path="/notice/upload" exact component={NoticeUpload} />
          <Route path="/notice/:id?" exact component={NoticeDetail} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
