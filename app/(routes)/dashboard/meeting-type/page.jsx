
import { Input } from '@/components/ui/input';

import React from 'react';
import MeetingEventList from './_components/MeetingEventList';

const MeetingType = () => {


  return (
    <div className="p-5">
      <div className="flex flex-col gap-5">
        <h2 className="font-bold text-3xl">
          Meeting Event
          <Input placeholder="Search" className="max-w-xs" />
        </h2>
        <hr />
      </div>
      <MeetingEventList/>
    </div>
  );
};

export default MeetingType;
