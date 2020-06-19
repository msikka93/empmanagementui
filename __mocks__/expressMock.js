export const mockSession = () => {
    const session = {}
    session.shift = {id: '0000-0000'}
    session.destroy = (cb) => cb();
    return session;
}

export const mockRequest = (user, session, headers = {}, cookies = {}) => ({
      user: user,
      session: session,
      logout: jest.fn(),
      headers: headers,
      cookies: cookies
})

export const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    res.redirect = jest.fn();
    res.end = jest.fn();
    return res;
};

export const mockNext = () => jest.fn();