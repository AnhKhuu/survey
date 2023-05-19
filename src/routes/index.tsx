import { createBrowserRouter } from "react-router-dom";
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignupPage from '../pages/SignupPage/SignupPage';
import SurveyPage from '../pages/SurveyPage/SurveyPage';
import FAQsPage from '../pages/FAQsPage/FAQsPage';
import SupportPage from '../pages/SupportPage/SupportPage';
import AccountPage from '../pages/admin/account/AccountPage/AccountPage';
import SurveyCreationPage from '../pages/admin/survey/SurveyCreationPage/SurveyCreationPage';
import SurveyListPage from '../pages/admin/survey/SurveyListPage/SurveyListPage';
import CompetitionCreationPage from "../pages/admin/competition/CompetitionCreationPage/CompetitionCreationPage";
import CompetitionListPage from "../pages/admin/competition/CompetitionListPage/CompetitionListPage";
import FAQPage from "../pages/admin/faq/FAQPage/FAQListPage";
import FAQListPage from "../pages/admin/faq/FAQPage/FAQListPage";
import FAQCreationPage from "../pages/admin/faq/FAQCreationPage/FAQCreationPage";
import SupportInformationListPage from "../pages/admin/supportInfo/SupportInformationListPage/SupportInformationListPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/signup",
    element: <SignupPage />
  },
  {
    path: "/surveys/:surveyId",
    element: <SurveyPage />
  },
  {
    path: "/faqs",
    element: <FAQsPage />
  },
  {
    path: "/support-information",
    element: <SupportPage />
  },
  {
    path: "/admin/account-management",
    element: <AccountPage />
  },
  {
    path: "/admin/survey-management",
    element: <SurveyListPage />
  },
  {
    path: "/admin/survey-management/create",
    element: <SurveyCreationPage />
  },
  {
    path: "/admin/survey-management/surveys/:surveyId",
    element: <SupportPage />
  },
  {
    path: "/admin/competition-management",
    element: <CompetitionListPage />
  },
  {
    path: "/admin/competition-management/create",
    element: <CompetitionCreationPage />
  },
  {
    path: "/admin/competition-management/competitions/:competitionId",
    element: <SupportPage />
  },
  {
    path: "/admin/support-information-management",
    element: <SupportInformationListPage />
  },
  {
    path: "/admin/faqs-management",
    element: <FAQListPage />
  },
  {
    path: "/admin/faqs-management/Create",
    element: <FAQCreationPage />
  },
]);