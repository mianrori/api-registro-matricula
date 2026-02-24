let activeConnections = new Map();

export const addConnection = (sessionId, { username, connection }) => {
  activeConnections.set(sessionId, {
    username,
    connection,
    createdAt: Date.now(),
  });
};

// Eliminar una conexión
export const removeConnection = (sessionId) => {
  activeConnections.delete(sessionId);
};

// Obtener una conexión específica
export const hasConnection = (sessionId) => {
  return activeConnections.has(sessionId);
};

export const getConnection = (sessionId) => {
  return activeConnections.get(sessionId);
};
