// Client
export const getAllClients = () => {
  return fetch('/api/client', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const getClient = (clientId) => {
  return fetch(`/api/client/${clientId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const createClient = (clientData) => {
  return fetch('/api/client', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(clientData),
  });
};

// Account
export const getAllAccounts = () => {
  return fetch('/api/account', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const getAccount = (accountId) => {
  return fetch(`/api/client/${accountId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const createAccount = (accountData) => {
  return fetch('/api/client', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(accountData),
  });
};

// Teller
export const getAllTellers = () => {
  return fetch('/api/teller', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const getTeller = (tellerId) => {
  return fetch(`/api/matchup/${tellerId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const createTeller = (tellerData) => {
  return fetch('/api/matchup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tellerData),
  });
};