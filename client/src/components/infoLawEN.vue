<template>
  <div>
    <div class="w-100 mb-5">
      <div class="notQR">
        <div
          class="notQRBox"
          style="border: 1px solid #5c5c5c;
                 overflow: auto;
                 width: calc(100% -40px);
                 margin: 20px auto;
                 background: #fff;
                 border-top: 4px solid #2e77ef !important;
                 box-shadow: 0px 2px 16px -4px rgba(0,0,0,0.2);"
        >
          <div class=" p-4 font-weight-bold" style="height: 10%">
            <div class="d-flex">
              <router-link to="/notInfoQR">
                <img
                  class="backimg"
                  src="https://www.flaticon.com/svg/static/icons/svg/61/61022.svg"
                  alt=""
                />
              </router-link>
              <!-- <p class="ml-3">{{ $t("개인정보보호정책") }}</p> -->
              <p class="ml-3">Privacy Policy</p>
            </div>
            <hr />
          </div>
          <div class="show" style="width: 80%; margin: 0 auto;">
            <div class="mt-4 pt-4">
              <p class="LawInfo">
                This Privacy Policy (the "Policy") explains the way of treatment
                of the information which is provided or collected in the
                websites on which this Policy is posted. In addition, the Policy
                also explains the information which is provided or collected in
                the course of using the applications of the Company which exists
                in the websites or platforms of other company.
                <br />
                <br />
                Through this Policy, the Company regards personal information of
                the users as important and inform them of the purpose and method
                of Company's using the personal information provided by the
                users and the measures taken by the Company for protection of
                those personal information.
                <br />
                <br />
                This Policy will be effective on the 1st day of March, 2021 and,
                in case of modification thereof, the Company will make public
                notice of it through posting it on the bulletin board of
                Company's website.
                <br />
                <br />
                1. Information to be collected and method of collection
                <br />
                Personal information items to be collected by the Company are as
                follows: The Company may collect the information directly
                provided by the users.
                <br />
                - User emergency medical information, etc.
                <br />
                Besides of information directly provided by the users, the
                Company may collect information in the course that the users use
                the service provided by the Company.
                <br />
                - Equipment information, log information, Location information,
                other information, etc.
                <br />
                The Company collects the information of users in a way of the
                followings:
                <br />
                - Website, etc.
                <br />
                <br />
                2. Use of collected information
                <br />
                The Company uses the collected information of users for the
                following purposes:
                <br />
                - Improvement of existing services and development of new
                services
                <br />
                - To make statistics on member’s service usage, to provide
                services and place advertisements based on statistical
                characteristics
                <br />
                - To comply with applicable laws or legal obligation
                <br />
                The Company agrees that it will obtain consent from the users,
                if the Company desires to use the information other than those
                expressly stated in this Policy.
                <br />
                <br />
                3. Sharing collected information
                <br />
                Except for the following cases, the Company will not share
                personal information with a 3rd party:
                <br />
                - when the Company shares the information with its affiliates,
                partners and service providers;
                <br />
                - when the users consent the sharing in advance;
                <br />
                - when the sharing is required by the laws
                <br />
                <br />
                4. Cookies, Beacons and Similar Technologies
                <br />
                The Company may collect collective and impersonal information
                through 'cookies' or 'web beacons'.
                <br />
                Cookies are very small text files to be sent to the browser of
                the users by the server used for operation of the websites of
                the Company and will be stored in hard-disks of the users'
                computer.
                <br />
                Web beacon is a small quantity of code which exists on the
                websites and e-mails. By using web beacons, we may know whether
                a user has interacted with certain webs or the contents of
                email.
                <br />
                These functions are used for evaluating, improving services and
                setting-up users' experiences so that much improved services can
                be provided by the Company to the users
                <br />
                The items of cookies to be collected by the Company and the
                purpose of such collection are as follows:
                <br />
                - Existing input information, etc.
                <br />
                - Increase user convenience
                <br />
                <br />
                5. Users' right to access and option
                <br />
                The users or their legal representatives, as main agents of the
                information, may exercise the following options regarding the
                collection, use and sharing of personal information by the
                Company:
                <br />
                - exercise right to access to personal information;
                <br />
                - make corrections or deletion;
                <br />
                - make temporary suspension of treatment of personal
                information; or
                <br />
                - request the withdrawal of their consent provided before
                <br />
                <br />
                6. Security
                <br />
                The Company regards the security of personal information of uses
                as very important. The company constructs the security measures
                to protect the users' personal information from any unauthorized
                access, release, use or modification
                <br />
                <br />
                7. Modification of Privacy Protection Policy
                <br />
                The Company has the right to amend or modify this Policy from
                time to time and, in such case, the Company will make a public
                notice of it through bulletin board of its website and obtain
                consent from the users if required by relevant laws.
                <br />
                <br />
                8. Responsible department of Company
                <br />
                The Company designates the following department and person in
                charge of personal information in order to protect personal
                information of customers and deal with complaints from
                customers: • Department responsible for privacy protection and
                customer service:
                <br />
                - E-mail: sequence9shop@gmail.com
                <br />
                The latest update date: 1st day of March, 2021
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeMount() {
    this.$store.state.Navbar.Toggle = "d-none";
  },
};
</script>

<style scoped>
.backimg {
  width: 25px;
  height: 25px;
}
.LawInfo {
  font-size: 14px;
  color: #555555;
  font-weight: 400;
}
.Visible {
  display: none !important;
}
</style>
