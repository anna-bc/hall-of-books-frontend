import React from "react";
import { Link } from "react-router-dom";
import "../Navbar.scss";

function NavbarLoggedIn() {
  return (
    <div className="Navbar">
      <div className="Navbar__wrapper">
        <Link to="/" className="Navbar__wrapper__logo">
          <svg
            id="logo"
            width="167"
            height="100"
            viewBox="0 0 167 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.25 32C5.85417 32 5.45833 32 5.0625 32C4.66667 32 4.26042 32 3.84375 32C3.42708 32.0208 3.0625 32.0417 2.75 32.0625C2.45833 32.0833 2.1875 32.1042 1.9375 32.125C1.70833 32.1458 1.52083 32.1562 1.375 32.1562C1.22917 32.1771 1.14583 32.1875 1.125 32.1875C0.6875 32.1875 0.46875 31.8958 0.46875 31.3125C0.46875 30.9167 0.9375 30.6979 1.875 30.6562C2.1875 30.6354 2.44792 30.6146 2.65625 30.5938C3.01042 30.5729 3.23958 30.4792 3.34375 30.3125C3.44792 30.125 3.5 29.875 3.5 29.5625V12.625C3.5 12.4583 3.47917 12.3229 3.4375 12.2188C3.39583 12.0938 3.34375 12 3.28125 11.9375C3.23958 11.8542 3.14583 11.7917 3 11.75C2.875 11.7083 2.78125 11.6875 2.71875 11.6875C2.65625 11.6667 2.51042 11.6458 2.28125 11.625C2.07292 11.5833 1.92708 11.5625 1.84375 11.5625C1.78125 11.5417 1.63542 11.5312 1.40625 11.5312C1.17708 11.5104 1.01042 11.4896 0.90625 11.4688C0.802083 11.4271 0.697917 11.3646 0.59375 11.2812C0.489583 11.1771 0.4375 11.0417 0.4375 10.875C0.4375 10.7083 0.5 10.5312 0.625 10.3438C0.75 10.1354 0.9375 10.0312 1.1875 10.0312C1.25 10.0312 1.4375 10.0417 1.75 10.0625C2.08333 10.0625 2.53125 10.0729 3.09375 10.0938C3.65625 10.0938 4.27083 10.0938 4.9375 10.0938H5.03125C5.71875 10.0938 6.34375 10.0938 6.90625 10.0938C7.48958 10.0729 7.94792 10.0625 8.28125 10.0625C8.61458 10.0417 8.8125 10.0312 8.875 10.0312C9.20833 10.0312 9.40625 10.25 9.46875 10.6875C9.46875 10.7292 9.46875 10.7812 9.46875 10.8438C9.48958 10.9062 9.5 10.9479 9.5 10.9688C9.5 11.2188 9.38542 11.3854 9.15625 11.4688C8.94792 11.5312 8.47917 11.5833 7.75 11.625C7.45833 11.625 7.22917 11.6354 7.0625 11.6562C6.58333 11.6771 6.34375 11.9896 6.34375 12.5938V17.875C6.34375 18.1875 6.47917 18.3438 6.75 18.3438H17.5625C17.9375 18.3438 18.125 18.1458 18.125 17.75V13.0312C18.125 12.2812 17.8958 11.8229 17.4375 11.6562C17.25 11.5729 16.9375 11.5312 16.5 11.5312C16.0833 11.5104 15.75 11.4583 15.5 11.375C15.2708 11.2917 15.1562 11.0938 15.1562 10.7812C15.1562 10.2812 15.4167 10.0312 15.9375 10.0312C16 10.0312 16.1667 10.0417 16.4375 10.0625C16.7292 10.0625 17.1146 10.0729 17.5938 10.0938C18.0938 10.0938 18.6354 10.0938 19.2188 10.0938C19.6354 10.0938 20.0625 10.0938 20.5 10.0938C20.9375 10.0729 21.3229 10.0521 21.6562 10.0312C21.9896 10.0104 22.2812 10 22.5312 10C22.8021 9.97917 23.0104 9.96875 23.1562 9.96875C23.3229 9.94792 23.4167 9.9375 23.4375 9.9375C23.8333 9.9375 24.0312 10.1562 24.0312 10.5938C24.0312 10.7188 24.0208 10.8333 24 10.9375C23.9792 11.0208 23.9271 11.1042 23.8438 11.1875C23.7812 11.25 23.7083 11.3021 23.625 11.3438C23.5625 11.3854 23.4583 11.4271 23.3125 11.4688C23.1667 11.4896 23.0312 11.5104 22.9062 11.5312C22.8021 11.5312 22.6354 11.5521 22.4062 11.5938C22.1771 11.6146 21.9792 11.6354 21.8125 11.6562C21.25 11.7188 20.9688 12.0208 20.9688 12.5625V29.375V29.5312C20.9688 30.1771 21.2604 30.5208 21.8438 30.5625C21.9688 30.5625 22.125 30.5729 22.3125 30.5938C22.5208 30.5938 22.6771 30.6042 22.7812 30.625C22.8854 30.625 23 30.6354 23.125 30.6562C23.2708 30.6771 23.375 30.7083 23.4375 30.75C23.5208 30.7708 23.5938 30.8125 23.6562 30.875C23.7188 30.9167 23.7604 30.9792 23.7812 31.0625C23.8229 31.1458 23.8438 31.25 23.8438 31.375C23.8438 31.9167 23.625 32.1875 23.1875 32.1875C23.1667 32.1875 23.0833 32.1771 22.9375 32.1562C22.7917 32.1562 22.5938 32.1458 22.3438 32.125C22.1146 32.1042 21.8438 32.0833 21.5312 32.0625C21.2188 32.0417 20.8646 32.0208 20.4688 32C20.0729 32 19.6771 32 19.2812 32C18.8854 32 18.4896 32 18.0938 32C17.6979 32.0208 17.3438 32.0417 17.0312 32.0625C16.7396 32.0833 16.4792 32.1042 16.25 32.125C16.0208 32.1458 15.8333 32.1562 15.6875 32.1562C15.5417 32.1771 15.4583 32.1875 15.4375 32.1875C15.0833 32.1875 14.9062 31.9792 14.9062 31.5625C14.9062 31.4375 14.9062 31.3438 14.9062 31.2812C14.9271 31.1979 14.9479 31.125 14.9688 31.0625C15.0104 30.9792 15.0417 30.9271 15.0625 30.9062C15.0833 30.8646 15.1354 30.8333 15.2188 30.8125C15.3021 30.7708 15.375 30.7396 15.4375 30.7188C15.5 30.6979 15.5938 30.6875 15.7188 30.6875C15.8646 30.6667 15.9896 30.6562 16.0938 30.6562C16.2188 30.6354 16.3854 30.625 16.5938 30.625C16.8229 30.6042 17.0208 30.5833 17.1875 30.5625C17.6042 30.5417 17.8646 30.4375 17.9688 30.25C18.0938 30.0625 18.1562 29.7604 18.1562 29.3438V20.6875C18.1562 20.4375 18.0104 20.3125 17.7188 20.3125H6.8125C6.5 20.3125 6.34375 20.5 6.34375 20.875V29.5312C6.34375 29.7188 6.35417 29.8646 6.375 29.9688C6.41667 30.0729 6.55208 30.1979 6.78125 30.3438C7.03125 30.4688 7.39583 30.5521 7.875 30.5938C7.91667 30.5938 8.05208 30.6042 8.28125 30.625C8.53125 30.6458 8.71875 30.6667 8.84375 30.6875C8.96875 30.7083 9.09375 30.7708 9.21875 30.875C9.36458 30.9792 9.4375 31.1146 9.4375 31.2812C9.4375 31.8854 9.27083 32.1875 8.9375 32.1875C8.91667 32.1875 8.83333 32.1771 8.6875 32.1562C8.5625 32.1562 8.375 32.1458 8.125 32.125C7.875 32.1042 7.59375 32.0833 7.28125 32.0625C6.98958 32.0417 6.64583 32.0208 6.25 32ZM25.3125 20.9688C25.3125 20.3438 25.8125 19.7188 26.8125 19.0938C27.8333 18.4479 28.9688 18.125 30.2188 18.125C30.6146 18.125 31.0208 18.1667 31.4375 18.25C31.8542 18.3333 32.3229 18.4792 32.8438 18.6875C33.3854 18.8958 33.8333 19.2604 34.1875 19.7812C34.5625 20.2812 34.7917 20.8958 34.875 21.625C34.9167 22.125 34.9375 22.5104 34.9375 22.7812V29.0938C34.9375 29.4688 35.0104 29.7708 35.1562 30C35.3021 30.2292 35.4479 30.375 35.5938 30.4375C35.7396 30.4792 35.8854 30.5 36.0312 30.5C36.3229 30.5 36.5521 30.4167 36.7188 30.25C36.8854 30.0625 37.0104 29.8854 37.0938 29.7188C37.1979 29.5312 37.3125 29.4375 37.4375 29.4375C37.625 29.4375 37.7188 29.5729 37.7188 29.8438C37.7188 30.3438 37.4896 30.8958 37.0312 31.5C36.5729 32.0833 35.9792 32.375 35.25 32.375C34.9792 32.375 34.7188 32.3333 34.4688 32.25C34.2188 32.1667 34.0104 32.0625 33.8438 31.9375C33.6771 31.7917 33.5208 31.6562 33.375 31.5312C33.25 31.4062 33.1458 31.2917 33.0625 31.1875L32.9688 31.0625C32.9479 31.0625 32.9375 31.0625 32.9375 31.0625C32.9375 31.0417 32.9271 31.0312 32.9062 31.0312C32.8646 31.0312 32.8333 31.0521 32.8125 31.0938C32.7917 31.1354 32.7188 31.2188 32.5938 31.3438C32.4688 31.4688 32.2917 31.6042 32.0625 31.75C31.125 32.3333 30.1354 32.625 29.0938 32.625C28.0104 32.625 27.125 32.2812 26.4375 31.5938C25.7708 30.9062 25.4375 30.0625 25.4375 29.0625V29.0312C25.4375 27.8229 25.8854 26.875 26.7812 26.1875C27.0938 25.9375 27.5 25.7188 28 25.5312C28.5 25.3229 28.9896 25.1667 29.4688 25.0625C29.9688 24.9583 30.4375 24.875 30.875 24.8125C31.3125 24.7292 31.6771 24.6771 31.9688 24.6562L32.4062 24.625C32.5729 24.5833 32.6562 24.4375 32.6562 24.1875V23.0312C32.6562 21.9271 32.4062 21.0729 31.9062 20.4688C31.3854 19.9062 30.7604 19.625 30.0312 19.625C28.9062 19.625 27.9896 20.3333 27.2812 21.75C27.0938 22 26.8646 22.125 26.5938 22.125C26.2604 22.125 25.9583 22.0208 25.6875 21.8125C25.4375 21.6042 25.3125 21.3229 25.3125 20.9688ZM29.8438 30.875C30.3229 30.875 30.7708 30.7708 31.1875 30.5625C31.625 30.3542 31.9271 30.1667 32.0938 30C32.2604 29.8333 32.3958 29.6875 32.5 29.5625C32.625 29.3958 32.6875 29.1562 32.6875 28.8438V28.0625V26.75C32.6875 26.3542 32.6667 26.1042 32.625 26C32.6042 25.875 32.5208 25.8125 32.375 25.8125C31.8542 25.8125 31.1979 25.8958 30.4062 26.0625C29.6354 26.2292 29.0208 26.5312 28.5625 26.9688C28.0625 27.3854 27.8125 27.9688 27.8125 28.7188C27.8125 29.5104 28.0312 30.0938 28.4688 30.4688C28.7604 30.7396 29.2188 30.875 29.8438 30.875ZM45.1875 31.5625C45.1875 31.9792 45.0625 32.1875 44.8125 32.1875C44.7917 32.1875 44.7188 32.1771 44.5938 32.1562C44.4896 32.1562 44.3438 32.1458 44.1562 32.125C43.9688 32.1042 43.7604 32.0833 43.5312 32.0625C43.3021 32.0417 43.0312 32.0208 42.7188 32C42.4062 32 42.1042 32 41.8125 32C41.5208 32 41.2292 32 40.9375 32C40.6458 32.0208 40.3854 32.0312 40.1562 32.0312C39.9271 32.0521 39.7188 32.0729 39.5312 32.0938C39.3646 32.1146 39.2292 32.125 39.125 32.125C39.0208 32.1458 38.9583 32.1562 38.9375 32.1562C38.625 32.1562 38.4688 31.9688 38.4688 31.5938V31.5C38.4688 31.2292 38.5312 31.0625 38.6562 31C38.8021 30.9167 39.1771 30.8438 39.7812 30.7812C40.1562 30.7396 40.3958 30.625 40.5 30.4375C40.625 30.2292 40.6875 29.9375 40.6875 29.5625V13.2812C40.6875 13.2188 40.6771 13.1667 40.6562 13.125C40.6562 13.0625 40.6458 13.0104 40.625 12.9688C40.6042 12.9271 40.5833 12.8958 40.5625 12.875C40.5625 12.8333 40.5312 12.8021 40.4688 12.7812C40.4271 12.7396 40.3854 12.7083 40.3438 12.6875C40.3229 12.6667 40.2604 12.6354 40.1562 12.5938C40.0729 12.5312 40.0104 12.4896 39.9688 12.4688C39.7604 12.3438 39.5312 12.2188 39.2812 12.0938C39.0521 11.9479 38.8854 11.8438 38.7812 11.7812C38.6979 11.7188 38.6042 11.6562 38.5 11.5938C38.3958 11.5104 38.3229 11.4479 38.2812 11.4062C38.2604 11.3438 38.25 11.2812 38.25 11.2188V11.1875C38.25 11.0833 38.6458 10.8229 39.4375 10.4062C40.4167 9.92708 41.3333 9.45833 42.1875 9C42.3125 8.91667 42.4479 8.875 42.5938 8.875C42.8854 8.875 43.0312 9.07292 43.0312 9.46875V29.7188C43.0312 29.8438 43.0312 29.9479 43.0312 30.0312C43.0521 30.1146 43.0729 30.1979 43.0938 30.2812C43.1146 30.3438 43.1354 30.3958 43.1562 30.4375C43.1771 30.4792 43.2188 30.5208 43.2812 30.5625C43.3646 30.6042 43.4167 30.6354 43.4375 30.6562C43.4792 30.6771 43.5521 30.7083 43.6562 30.75C43.7812 30.7708 43.8646 30.7917 43.9062 30.8125C43.9688 30.8125 44.0833 30.8229 44.25 30.8438C44.4375 30.8646 44.5729 30.8854 44.6562 30.9062C45.0104 30.9688 45.1875 31.1875 45.1875 31.5625ZM52.8125 31.5625C52.8125 31.9792 52.6875 32.1875 52.4375 32.1875C52.4167 32.1875 52.3438 32.1771 52.2188 32.1562C52.1146 32.1562 51.9688 32.1458 51.7812 32.125C51.5938 32.1042 51.3854 32.0833 51.1562 32.0625C50.9271 32.0417 50.6562 32.0208 50.3438 32C50.0312 32 49.7292 32 49.4375 32C49.1458 32 48.8542 32 48.5625 32C48.2708 32.0208 48.0104 32.0312 47.7812 32.0312C47.5521 32.0521 47.3438 32.0729 47.1562 32.0938C46.9896 32.1146 46.8542 32.125 46.75 32.125C46.6458 32.1458 46.5833 32.1562 46.5625 32.1562C46.25 32.1562 46.0938 31.9688 46.0938 31.5938V31.5C46.0938 31.2292 46.1562 31.0625 46.2812 31C46.4271 30.9167 46.8021 30.8438 47.4062 30.7812C47.7812 30.7396 48.0208 30.625 48.125 30.4375C48.25 30.2292 48.3125 29.9375 48.3125 29.5625V13.2812C48.3125 13.2188 48.3021 13.1667 48.2812 13.125C48.2812 13.0625 48.2708 13.0104 48.25 12.9688C48.2292 12.9271 48.2083 12.8958 48.1875 12.875C48.1875 12.8333 48.1562 12.8021 48.0938 12.7812C48.0521 12.7396 48.0104 12.7083 47.9688 12.6875C47.9479 12.6667 47.8854 12.6354 47.7812 12.5938C47.6979 12.5312 47.6354 12.4896 47.5938 12.4688C47.3854 12.3438 47.1562 12.2188 46.9062 12.0938C46.6771 11.9479 46.5104 11.8438 46.4062 11.7812C46.3229 11.7188 46.2292 11.6562 46.125 11.5938C46.0208 11.5104 45.9479 11.4479 45.9062 11.4062C45.8854 11.3438 45.875 11.2812 45.875 11.2188V11.1875C45.875 11.0833 46.2708 10.8229 47.0625 10.4062C48.0417 9.92708 48.9583 9.45833 49.8125 9C49.9375 8.91667 50.0729 8.875 50.2188 8.875C50.5104 8.875 50.6562 9.07292 50.6562 9.46875V29.7188C50.6562 29.8438 50.6562 29.9479 50.6562 30.0312C50.6771 30.1146 50.6979 30.1979 50.7188 30.2812C50.7396 30.3438 50.7604 30.3958 50.7812 30.4375C50.8021 30.4792 50.8438 30.5208 50.9062 30.5625C50.9896 30.6042 51.0417 30.6354 51.0625 30.6562C51.1042 30.6771 51.1771 30.7083 51.2812 30.75C51.4062 30.7708 51.4896 30.7917 51.5312 30.8125C51.5938 30.8125 51.7083 30.8229 51.875 30.8438C52.0625 30.8646 52.1979 30.8854 52.2812 30.9062C52.6354 30.9688 52.8125 31.1875 52.8125 31.5625ZM61.8438 25.4688C61.8438 23.3229 62.5208 21.5729 63.875 20.2188C65.25 18.8646 66.875 18.1875 68.75 18.1875C70.6667 18.1875 72.2604 18.875 73.5312 20.25C74.8021 21.6042 75.4375 23.3438 75.4375 25.4688C75.4375 27.6562 74.7708 29.3958 73.4375 30.6875C72.125 31.9583 70.5208 32.5938 68.625 32.5938C66.625 32.5938 64.9896 31.9062 63.7188 30.5312C62.4688 29.1562 61.8438 27.4688 61.8438 25.4688ZM65.5312 29.4375C66.3438 30.5 67.4062 31.0312 68.7188 31.0312C70.0312 31.0312 71.1146 30.5 71.9688 29.4375C72.8229 28.3542 73.25 27.0729 73.25 25.5938C73.25 23.9271 72.7708 22.5312 71.8125 21.4062C70.875 20.2604 69.7812 19.6875 68.5312 19.6875C67.4896 19.6875 66.5208 20.1458 65.625 21.0625C64.75 21.9792 64.3125 23.3958 64.3125 25.3125C64.3125 26.9792 64.7188 28.3542 65.5312 29.4375ZM77.1562 32.1875C76.8229 32.1875 76.6562 31.9271 76.6562 31.4062C76.6562 31.1979 76.7188 31.0625 76.8438 31C76.9896 30.9375 77.2917 30.875 77.75 30.8125C77.9375 30.7917 78.0833 30.7708 78.1875 30.75C78.25 30.75 78.3021 30.7396 78.3438 30.7188C78.4062 30.6979 78.4479 30.6667 78.4688 30.625C78.5104 30.5833 78.5417 30.5521 78.5625 30.5312C78.5833 30.5104 78.5938 30.4688 78.5938 30.4062C78.6146 30.3438 78.625 30.3021 78.625 30.2812C78.625 30.2604 78.625 30.2083 78.625 30.125C78.6458 30.0417 78.6562 29.9896 78.6562 29.9688C78.7396 28.8854 78.7812 25.8333 78.7812 20.8125C78.7812 20.6667 78.7188 20.5729 78.5938 20.5312C78.4688 20.4896 78.1667 20.4688 77.6875 20.4688C77.4375 20.4688 77.2396 20.4688 77.0938 20.4688C76.6354 20.4688 76.4062 20.2812 76.4062 19.9062C76.4062 19.2604 76.6354 18.9375 77.0938 18.9375C77.3646 18.9167 77.6771 18.9062 78.0312 18.9062C78.3646 18.9062 78.5625 18.8958 78.625 18.875C78.6875 18.8542 78.7188 18.7708 78.7188 18.625V18.5938C78.7812 15.9896 79.2396 13.9375 80.0938 12.4375C80.6979 11.3958 81.5625 10.5625 82.6875 9.9375C83.8333 9.29167 84.9167 8.96875 85.9375 8.96875C86.7083 8.96875 87.2812 9.14583 87.6562 9.5C88.0521 9.83333 88.25 10.2083 88.25 10.625C88.25 10.9583 88.125 11.25 87.875 11.5C87.6458 11.75 87.3229 11.875 86.9062 11.875C86.6146 11.875 86.1771 11.75 85.5938 11.5C85.0312 11.2292 84.5833 11.0938 84.25 11.0938C83.1667 11.0938 82.3438 11.75 81.7812 13.0625C81.2396 14.375 80.9688 16.0417 80.9688 18.0625V18.3438C80.9688 18.5521 80.9792 18.6875 81 18.75C81.0417 18.8125 81.1354 18.8438 81.2812 18.8438H84.4062C84.8854 18.8438 85.125 19.0625 85.125 19.5V19.5312C85.125 20.1771 84.8438 20.5 84.2812 20.5H81.2812C81.0938 20.5 81 20.5938 81 20.7812V29.9375V30.0625C81 30.5417 81.2083 30.7917 81.625 30.8125C81.7917 30.8333 81.9792 30.8542 82.1875 30.875C82.3958 30.875 82.5417 30.875 82.625 30.875C82.7292 30.875 82.8333 30.8854 82.9375 30.9062C83.0625 30.9062 83.1458 30.9271 83.1875 30.9688C83.25 30.9896 83.3021 31.0208 83.3438 31.0625C83.4062 31.1042 83.4375 31.1667 83.4375 31.25C83.4583 31.3125 83.4688 31.3958 83.4688 31.5C83.4688 31.9583 83.2917 32.1875 82.9375 32.1875C82.9167 32.1875 82.8542 32.1771 82.75 32.1562C82.6458 32.1562 82.5 32.1458 82.3125 32.125C82.1458 32.1042 81.9479 32.0833 81.7188 32.0625C81.4896 32.0417 81.2292 32.0208 80.9375 32C80.6458 32 80.3542 32 80.0625 32C79.7708 32 79.4688 32 79.1562 32C78.8646 32.0208 78.6042 32.0417 78.375 32.0625C78.1667 32.0833 77.9688 32.1042 77.7812 32.125C77.5938 32.1458 77.4479 32.1562 77.3438 32.1562C77.2396 32.1771 77.1771 32.1875 77.1562 32.1875ZM96.3125 10.0625C96.9583 10.0625 97.8854 10.0104 99.0938 9.90625C100.323 9.80208 101.25 9.75 101.875 9.75C104.188 9.75 105.958 10.1771 107.188 11.0312C108.5 11.9896 109.156 13.2188 109.156 14.7188C109.156 15.6979 108.875 16.625 108.312 17.5C107.75 18.375 107.021 19.0938 106.125 19.6562L106.031 19.75C106.031 19.7708 106.073 19.8021 106.156 19.8438C107.406 20.0729 108.458 20.7083 109.312 21.75C110.167 22.7917 110.594 24.0104 110.594 25.4062C110.594 26.8229 110.188 28.0729 109.375 29.1562C108.562 30.2188 107.615 30.9896 106.531 31.4688C105.469 31.9479 104.188 32.1875 102.688 32.1875C102.188 32.1875 101.458 32.1562 100.5 32.0938C99.5417 32.0312 98.8125 32 98.3125 32C97.9583 32 97.3854 32.0104 96.5938 32.0312C95.8021 32.0521 95.1562 32.0625 94.6562 32.0625H94.5938C94.4688 32.0625 94.3646 32.0521 94.2812 32.0312C94.2188 32.0104 94.1458 31.9375 94.0625 31.8125C94 31.6875 93.9688 31.5104 93.9688 31.2812C93.9688 31.0312 94.0417 30.875 94.1875 30.8125C94.3542 30.75 94.7396 30.6875 95.3438 30.625C95.5312 30.6042 95.6771 30.5833 95.7812 30.5625C95.9271 30.5417 96.0312 30.5208 96.0938 30.5C96.1771 30.4583 96.25 30.3958 96.3125 30.3125C96.3958 30.2083 96.4375 30.0729 96.4375 29.9062V12.4062C96.4375 12.0104 96.3229 11.7604 96.0938 11.6562C95.8854 11.5312 95.5 11.4479 94.9375 11.4062C94.875 11.4062 94.8229 11.4062 94.7812 11.4062C94.4062 11.4062 94.2188 11.1354 94.2188 10.5938C94.2188 10.2188 94.4062 10.0312 94.7812 10.0312C94.8021 10.0312 94.875 10.0417 95 10.0625C95.125 10.0625 95.3021 10.0625 95.5312 10.0625C95.7812 10.0625 96.0417 10.0625 96.3125 10.0625ZM106.312 15.4062C106.312 14.9688 106.24 14.5312 106.094 14.0938C105.948 13.6354 105.708 13.1771 105.375 12.7188C105.042 12.2604 104.542 11.8854 103.875 11.5938C103.229 11.3021 102.469 11.1562 101.594 11.1562C100.406 11.1562 99.6562 11.2812 99.3438 11.5312C99.2396 11.6146 99.1875 11.75 99.1875 11.9375V12V18.8438C99.1875 19.1146 99.3021 19.25 99.5312 19.25H100.969H101.375C103.625 19.25 105.115 18.5729 105.844 17.2188C106.156 16.5938 106.312 15.9896 106.312 15.4062ZM101.656 30.6875C103.344 30.6875 104.781 30.2396 105.969 29.3438C107.156 28.4271 107.75 27.1667 107.75 25.5625C107.75 24.5 107.438 23.5208 106.812 22.625C106.208 21.7083 105.26 21.1146 103.969 20.8438C103.281 20.6979 102.385 20.625 101.281 20.625H99.6562C99.3438 20.625 99.1875 20.7917 99.1875 21.125V29.375C99.1875 29.6042 99.1979 29.7812 99.2188 29.9062C99.2604 30.0312 99.3542 30.1667 99.5 30.3125C99.6458 30.4375 99.8646 30.5208 100.156 30.5625C100.781 30.6458 101.281 30.6875 101.656 30.6875ZM112.156 25.4688C112.156 23.3229 112.833 21.5729 114.188 20.2188C115.562 18.8646 117.188 18.1875 119.062 18.1875C120.979 18.1875 122.573 18.875 123.844 20.25C125.115 21.6042 125.75 23.3438 125.75 25.4688C125.75 27.6562 125.083 29.3958 123.75 30.6875C122.438 31.9583 120.833 32.5938 118.938 32.5938C116.938 32.5938 115.302 31.9062 114.031 30.5312C112.781 29.1562 112.156 27.4688 112.156 25.4688ZM115.844 29.4375C116.656 30.5 117.719 31.0312 119.031 31.0312C120.344 31.0312 121.427 30.5 122.281 29.4375C123.135 28.3542 123.562 27.0729 123.562 25.5938C123.562 23.9271 123.083 22.5312 122.125 21.4062C121.188 20.2604 120.094 19.6875 118.844 19.6875C117.802 19.6875 116.833 20.1458 115.938 21.0625C115.062 21.9792 114.625 23.3958 114.625 25.3125C114.625 26.9792 115.031 28.3542 115.844 29.4375ZM127.094 25.4688C127.094 23.3229 127.771 21.5729 129.125 20.2188C130.5 18.8646 132.125 18.1875 134 18.1875C135.917 18.1875 137.51 18.875 138.781 20.25C140.052 21.6042 140.688 23.3438 140.688 25.4688C140.688 27.6562 140.021 29.3958 138.688 30.6875C137.375 31.9583 135.771 32.5938 133.875 32.5938C131.875 32.5938 130.24 31.9062 128.969 30.5312C127.719 29.1562 127.094 27.4688 127.094 25.4688ZM130.781 29.4375C131.594 30.5 132.656 31.0312 133.969 31.0312C135.281 31.0312 136.365 30.5 137.219 29.4375C138.073 28.3542 138.5 27.0729 138.5 25.5938C138.5 23.9271 138.021 22.5312 137.062 21.4062C136.125 20.2604 135.031 19.6875 133.781 19.6875C132.74 19.6875 131.771 20.1458 130.875 21.0625C130 21.9792 129.562 23.3958 129.562 25.3125C129.562 26.9792 129.969 28.3542 130.781 29.4375ZM148.5 31.625C148.5 31.3542 148.573 31.1667 148.719 31.0625C148.885 30.9375 149.062 30.8854 149.25 30.9062C149.458 30.9062 149.635 30.8646 149.781 30.7812C149.948 30.6979 150.031 30.5521 150.031 30.3438C150.031 30.1354 149.75 29.6354 149.188 28.8438C148.625 28.0521 148.083 27.3333 147.562 26.6875C147.062 26.0417 146.781 25.6875 146.719 25.625C146.719 25.5833 146.677 25.5625 146.594 25.5625C146.51 25.5625 146.344 25.6979 146.094 25.9688C145.844 26.2396 145.708 26.4167 145.688 26.5C145.667 26.5625 145.656 26.6771 145.656 26.8438V30.1562C145.656 30.4479 145.729 30.625 145.875 30.6875C146.021 30.75 146.438 30.8229 147.125 30.9062C147.583 31.0104 147.812 31.2396 147.812 31.5938C147.812 31.9479 147.667 32.125 147.375 32.125C147.333 32.125 147.208 32.1146 147 32.0938C146.792 32.0729 146.5 32.0521 146.125 32.0312C145.75 32.0104 145.344 32 144.906 32C144.469 32 144.062 32.0104 143.688 32.0312C143.312 32.0521 143.01 32.0729 142.781 32.0938C142.573 32.1146 142.448 32.125 142.406 32.125C142.031 32.125 141.844 31.9375 141.844 31.5625C141.844 31.3125 141.927 31.1458 142.094 31.0625C142.26 30.9583 142.438 30.9062 142.625 30.9062C142.833 30.9062 143.021 30.8542 143.188 30.75C143.375 30.6458 143.479 30.4688 143.5 30.2188V12.9688C143.5 12.6354 143.365 12.375 143.094 12.1875C142.156 11.5417 141.667 11.1979 141.625 11.1562L141.5 10.9062C141.5 10.6979 141.719 10.5208 142.156 10.375C144.177 9.47917 145.229 9.03125 145.312 9.03125C145.542 9.03125 145.656 9.20833 145.656 9.5625V24.6875C145.656 24.7708 145.688 24.8125 145.75 24.8125C145.833 24.8125 145.896 24.7708 145.938 24.6875C146.25 24.375 146.562 24.0625 146.875 23.75C147.208 23.4167 147.458 23.1667 147.625 23C147.812 22.8125 148 22.625 148.188 22.4375C148.375 22.25 148.51 22.1042 148.594 22C148.698 21.8958 148.792 21.7917 148.875 21.6875C148.958 21.5833 149.01 21.5 149.031 21.4375C149.052 21.3542 149.073 21.2708 149.094 21.1875C149.115 21.1042 149.125 21.0104 149.125 20.9062C149.125 20.5521 148.979 20.2708 148.688 20.0625C148.417 19.8333 148.281 19.6667 148.281 19.5625V19.2188C148.281 18.9479 148.51 18.8125 148.969 18.8125H150.812C151.438 18.8125 152.01 18.8021 152.531 18.7812C153.073 18.7604 153.49 18.75 153.781 18.75C154.094 18.7292 154.281 18.7188 154.344 18.7188C154.656 18.7188 154.812 18.9167 154.812 19.3125C154.812 19.5625 154.76 19.7292 154.656 19.8125C154.552 19.8958 154.302 19.9583 153.906 20C153.531 20.0417 153.219 20.0938 152.969 20.1562C152.51 20.2812 152.021 20.5312 151.5 20.9062C150.979 21.2812 150.552 21.6354 150.219 21.9688C149.885 22.3021 149.25 22.9479 148.312 23.9062C148.167 24.0521 148.094 24.1458 148.094 24.1875C148.094 24.2708 149.333 25.7917 151.812 28.75C152.188 29.1875 152.49 29.5312 152.719 29.7812C152.948 30.0104 153.271 30.25 153.688 30.5C154.125 30.75 154.583 30.9062 155.062 30.9688C155.417 31.0104 155.594 31.1979 155.594 31.5312C155.594 31.9688 155.417 32.1875 155.062 32.1875C155.042 32.1875 154.969 32.1771 154.844 32.1562C154.74 32.1562 154.594 32.1458 154.406 32.125C154.219 32.1042 154 32.0833 153.75 32.0625C153.521 32.0417 153.25 32.0208 152.938 32C152.625 32 152.312 32 152 32C151.688 32 151.375 32 151.062 32C150.75 32.0208 150.469 32.0417 150.219 32.0625C149.99 32.0833 149.781 32.1042 149.594 32.125C149.406 32.1458 149.25 32.1562 149.125 32.1562C149.021 32.1771 148.958 32.1875 148.938 32.1875C148.646 32.1875 148.5 32.0104 148.5 31.6562V31.625ZM156.844 22.125C156.844 21.125 157.26 20.25 158.094 19.5C158.948 18.7292 160.062 18.3438 161.438 18.3438C161.729 18.3438 161.99 18.3646 162.219 18.4062C162.469 18.4271 162.656 18.4479 162.781 18.4688C162.927 18.4896 163.01 18.5 163.031 18.5C163.115 18.5 163.24 18.4479 163.406 18.3438C163.573 18.2396 163.719 18.1875 163.844 18.1875C164.094 18.1875 164.26 18.3854 164.344 18.7812C164.406 19.0938 164.49 19.5312 164.594 20.0938C164.698 20.6562 164.781 21.1354 164.844 21.5312C164.927 21.9062 164.969 22.1146 164.969 22.1562C164.969 22.4896 164.719 22.6562 164.219 22.6562C164.01 22.6562 163.854 22.5833 163.75 22.4375C163.667 22.2708 163.583 22.0417 163.5 21.75C163.417 21.4583 163.323 21.2396 163.219 21.0938C162.99 20.7812 162.615 20.5 162.094 20.25C161.594 19.9792 161.094 19.8438 160.594 19.8438C160.031 19.8438 159.552 20 159.156 20.3125C158.76 20.625 158.562 21.0312 158.562 21.5312C158.562 22.5938 159.406 23.3646 161.094 23.8438C161.302 23.9062 161.615 23.9896 162.031 24.0938C162.448 24.1771 162.771 24.25 163 24.3125C163.229 24.375 163.5 24.4688 163.812 24.5938C164.146 24.7188 164.438 24.875 164.688 25.0625C164.938 25.25 165.177 25.4792 165.406 25.75C166.052 26.5 166.375 27.3438 166.375 28.2812C166.375 29.4062 165.927 30.4062 165.031 31.2812C164.156 32.1562 162.979 32.5938 161.5 32.5938C160.688 32.5938 159.854 32.4583 159 32.1875C158.167 31.9167 157.531 31.5208 157.094 31C156.844 30.7292 156.719 30.3646 156.719 29.9062C156.719 29.5729 156.708 29.1979 156.688 28.7812C156.688 28.3646 156.688 28.1042 156.688 28C156.688 27.5833 156.719 27.3125 156.781 27.1875C156.865 27.0625 157.021 27 157.25 27C157.479 27 157.625 27.0938 157.688 27.2812C157.75 27.4688 157.792 27.75 157.812 28.125C157.833 28.4792 157.896 28.7708 158 29C158.188 29.4167 158.625 29.8333 159.312 30.25C160.021 30.6667 160.792 30.875 161.625 30.875C162.354 30.875 162.969 30.6771 163.469 30.2812C163.969 29.8854 164.219 29.375 164.219 28.75C164.219 28.3542 164.125 28.0104 163.938 27.7188C163.771 27.4062 163.5 27.1562 163.125 26.9688C162.75 26.7604 162.448 26.6146 162.219 26.5312C161.99 26.4271 161.625 26.3125 161.125 26.1875L160.375 26.0312C158.021 25.3438 156.844 24.0417 156.844 22.125Z"
              fill="white"
            />
            <path
              d="M120.628 55.4167H115.728V44.8274C115.728 44.6251 115.634 44.4311 115.467 44.2907C115.299 44.1504 115.08 44.0713 114.843 44.0817C111.137 44.193 107.533 44.643 104.094 45.3872V37.217C104.094 36.9603 103.943 36.7207 103.693 36.5848C103.442 36.4475 103.131 36.4333 102.864 36.5453C95.2527 39.7615 88.4863 45.9858 82.7354 55.0375C74.1669 48.131 64.1163 44.4393 52.8371 44.081C52.5982 44.0668 52.379 44.1489 52.2112 44.29C52.0442 44.4303 51.9492 44.6244 51.9492 44.8274V50.2986C50.7574 50.3717 49.5494 50.4665 48.3362 50.5971C47.9046 50.6442 47.581 50.9651 47.5853 51.3443L47.6255 55.4167H44.4286V95.4532H82.9563H120.628C121.101 95.4532 121.484 95.1195 121.484 94.7068V56.1631C121.484 55.7511 121.101 55.4167 120.628 55.4167ZM114.016 45.6059V82.5874C103.653 83.0345 94.2835 86.0186 86.0873 91.4644C91.2364 84.1824 97.1174 79.1084 103.612 76.3646C103.908 76.2399 104.094 75.9787 104.094 75.6935V46.9196C107.266 46.2068 110.592 45.7582 114.016 45.6059ZM102.382 38.4397V75.2308C95.435 78.2955 89.2004 83.8801 83.8125 91.857V56.4191C89.167 47.7839 95.4085 41.7425 102.382 38.4397ZM82.1002 56.5497V92.9236C82.0128 92.8803 81.9238 92.84 81.8356 92.7967C73.6771 86.512 64.2147 83.0792 53.6615 82.5896V50.9756C53.6615 50.9659 53.6667 50.9576 53.6658 50.9472C53.6658 50.942 53.6615 50.9375 53.6615 50.9323V45.6081C64.3877 46.1254 73.9494 49.8037 82.1002 56.5497ZM51.9492 51.7929V83.3032C51.9492 83.7047 52.3139 84.0339 52.7737 84.0488C60.671 84.2996 67.9451 86.2537 74.5051 89.8574C66.9502 87.48 58.6342 86.7105 49.6564 87.5711L49.3036 52.0011C50.1923 51.9138 51.0751 51.8481 51.9492 51.7929ZM46.1409 56.9095H47.6401L47.9534 88.416C47.9552 88.6288 48.0613 88.831 48.2454 88.9706C48.4286 89.1109 48.6743 89.1744 48.9149 89.1498C60.7858 87.8689 71.4596 89.4939 80.7089 93.9596H46.1409V56.9095ZM119.772 93.9603H85.2406C93.8023 87.7159 103.77 84.3832 114.901 84.0496C115.362 84.0354 115.728 83.7062 115.728 83.3039V56.9095H119.772V93.9603Z"
              fill="white"
            />
          </svg>
        </Link>
        <div className="Navbar__links">
          <Link to="/" className="Navbar__links__link">
            <a>Home</a>
          </Link>
          <div className="Navbar__links__link">
            <a href="">Link 2</a>
          </div>
          <Link to="/user" className="Navbar__links__link">
            <a>My Profile</a>
          </Link>
          {/* TODO: add a check if user is logged in to display a "My Account" Button instead */}
          <Link to="/logout">
            <button className="Navbar__links__link Navbar__links__link--login">
              Logout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavbarLoggedIn;
