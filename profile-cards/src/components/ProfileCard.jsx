import React from 'react';
import MaterialProfileCard from './MaterialProfileCard';
import TailwindProfileCard from './TailwindProfileCard';
import StyledProfileCard from './StyledProfileCard';
import VanillaProfileCard from './VanillaProfileCard';

export default function ProfileCard() {
  return (
    <div className="flex flex-col items-center gap-8 p-8">
      <MaterialProfileCard />
      <TailwindProfileCard />
      <StyledProfileCard />
      <VanillaProfileCard />
    </div>
  );
}
