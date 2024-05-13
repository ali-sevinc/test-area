import { UserType } from "./useSearchAuto";

import styles from "./Results.module.css";

export default function Results({ users }: { users: UserType[] }) {
  return (
    <ul className={styles.results}>
      {users.map((user) => (
        <li key={user.id}>
          <img src={user.image} />
          <div>
            <p>
              <span>Name:</span>{" "}
              <b>
                {user.firstName} {user.lastName}
              </b>
            </p>
            <p>Age: {user.age}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
