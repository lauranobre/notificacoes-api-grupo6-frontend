// src/components/NotificationList.jsx
import NotificationCard from "./NotificationCard";

export default function NotificationList({ notificacoes }) {
  return (
    <div className="mt-4">
      <div aria-live="polite" className="flex flex-col gap-3">
        {notificacoes.map((item) => (
          <NotificationCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}