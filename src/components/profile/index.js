import { enhancer } from "./ProfileCard.enhancer";
import { ProfileCard } from "./ProfileCard";
import { ProfilePage } from "./ProfilePage";

export const ProfileCardContainer = enhancer(ProfileCard);
export const ProfilePageContainer = enhancer(ProfilePage);
