import React from 'react';
import { withRouter } from "react-router"
import { Header } from './Header';
import { Groups } from './Groups';

export const Index = withRouter((props) => {
  return (
    <div>
      <Header />
      <p className="lead text-center">Hawthorn is a place for communities;</p>
      <p className="text-center">a platform with commitment to social justice, premised on mutual support and owned by you, the community</p>
      <div class="alert alert-warning" role="alert">
        <h1 className="display-4 text-center">Hawthorn's Transition to Small Private Groups</h1>
        <p className="text-center"><u>Updated January 20, 2020</u></p>
        <p className="text-center">
          In all of the user interviews we have conducted with local community leaders, similar feature requests around private groups have been made.  These requests describe a private communication and administrative tool to compliment and aid in the facillitation of real-world small groups (bipoc and qtpoc groups, women's and men's groups, an antiracist group, people returning from therapeutic retreats who need to stay in contact and integrate the retreat).  Hawthorn direction will pivot away from public communities with default user anonymity to these private, more intimate communities with a required user who may reveal details of their identity at their discretion.
        </p>
        <p className="text-center">
          The pattern described by people in these user interviews is common to how small groups have organized historically for change work, such as the consciousness raising feminist groups in the 1960s, affinity groups, and communities of practice.
        </p>
        <p className="text-center">
          With these requests and the nature of the groups in mind, we will be modeling this feature after the structures identified in the article <a href="https://docs.google.com/document/d/1vUHr_Q18GwJ8Lsp49J3gaIrOp3xi3Cv0PmHeSMPMlSQ/edit?usp=sharing">"What are Alchemy Pods?" by Adam Brock</a>.
        </p>
        <p className="text-center">
          This feature is currently under construction and may be complete by the end of February.  If you would like to be notified when the feature has been released, please use <a href="/contact-us">the contact form</a> to share your email address and request to receive newsletters (you can cancel at anytime and your information will never be shared).
        </p>
        <p className="text-center">
          The remaining public group, <a href="http://hawth.org/community/ck5ffak46000t0780bz66zj3v">"Hawthorn Community Building"</a>, may be used for feature requests, product feedback, moral support, general Hawthorn communication and whatever else emerges.
        </p>
      </div>
      <Groups />
    </div>
  )
})
