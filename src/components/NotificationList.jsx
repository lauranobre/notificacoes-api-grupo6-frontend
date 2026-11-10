// src/components/NotificationList.jsx
import NotificationCard from "./NotificationCard";

export default function NotificationList({ notificacoes }) {
  return (
    <div className="mt-4">
      {/* PONTO CRÍTICO EXIGIDO: aria-live="polite" avisa leitores de tela quando novas mensagens chegam via API */}
      <div aria-live="polite" className="flex flex-col gap-3">
        {notificacoes.map((item) => (
          <NotificationCard key={item.id} notificacao={item} />
        ))}
      </div>
    </div>
  );
}