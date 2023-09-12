"use client"
import { useClient } from 'next/client';
import GroupOne from "./component/Group1/GroupOne";
import GroupTwo from "./component/Group2/GroupTwo";
import GroupThree from "./component/Group3/GroupThree";
import GroupFour from "./component/Group4/GroupFour";
import GroupFive from "./component/Group5/GroupFive";
import GroupSix from "./component/Group6/GroupSix";
import GroupSeven from "./component/Group7/GroupSeven";
import GroupEight from "./component/Group8/GroupEight";
import GroupNine from "./component/Group9/GroupNine";
import GroupTen from "./component/Group10/GroupTen";
import GroupEleven from "./component/Group11/GroupEleven";
import GroupTwelve from "./component/GroupTwelve/GroupTwelve";
import GroupThirteen from "./component/Group13/GroupThirteen";
import GroupFourteenth from "./component/Group14/Fourtenth";
import Fifteen from "./component/Group15/Fifteen";
import Sixteen from "./component/Group16/Sixteen";
import Eighteen from "./component/Group18/Eighteen";
import Ninteenth from "./component/Group19/ninteenth";
import Twenty from "./component/Group20/twenty";
import TwentyOne from "./component/Group21/twentyOne";
import TwentyTwo from "./component/Group22/TwentyTwo";
import Seventeen from "./component/Group17/Seventeen";
import PageOne from "./component/Group1/PageOne";

export default function Home() {
//  const isClient = useClient();

//   if (!isClient) {
//     return null; // Return null if rendering on the server
//   }
  return (
    <div className='overflow-hidden'>
      {/* <GroupOne/> */}
      <PageOne/>
      <GroupTwo/>
      <GroupThree/>
      <GroupFour/>
      <GroupFive/>
      <GroupSix />
      <GroupSeven/>
        <GroupEight/>
       <GroupNine/> 
        <GroupTen/>
       <GroupEleven/>
       <GroupTwelve/> 
       <GroupThirteen/>
       <GroupFourteenth/>
       <Fifteen/>
       <Sixteen/>
       <Seventeen/>
       <Eighteen/>
       <Ninteenth/>
       <Twenty/>
       <TwentyOne/>
       <TwentyTwo/>
    </div>
  );
}
