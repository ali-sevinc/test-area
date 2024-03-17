import { HiLocationMarker } from "react-icons/hi";
import { ProfileType } from "./GitHubProfile";
import { HiLink } from "react-icons/hi2";

function formatDate(date: string) {
  const newDate = new Date(date);
  const formatDate = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return formatDate.format(newDate);
}

export default function Result({ profile }: { profile: ProfileType }) {
  const readableDate = formatDate(profile.created_at);

  return (
    <div className="bg-gray-600 w-full rounded-xl p-4 flex gap-8 text-gray-50">
      <img src={profile.avatar_url} className="w-40 h-40 rounded-full" />
      <div className="w-full flex flex-col gap-4 justify-between">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold">{profile.name}</h2>
            <p className="text-sm text-gray-300 italic">@{profile.login}</p>
          </div>
          <p>{readableDate}</p>
        </div>
        <div className="flex justify-between bg-gray-800 px-8 py-4 rounded-xl">
          <p className="flex gap-1 items-center">
            <HiLocationMarker /> {profile.location}
          </p>
          <a
            href={profile.html_url}
            target="_blank"
            className="hover:underline flex items-center gap-1"
          >
            <HiLink />
            <span>{profile.html_url}</span>
          </a>
        </div>
        <div className="flex justify-between bg-gray-800 px-8 py-4 rounded-xl">
          <P title="Repos" text={profile.public_repos} />
          <P title="Followers" text={profile.followers} />
          <P title="Following" text={profile.following} />
        </div>
      </div>
    </div>
  );
}

function P({ title, text }: { title: string; text: string | number }) {
  return (
    <p className="flex flex-col">
      <b>{title}</b>
      <span className="text-xl">{text}</span>
    </p>
  );
}
