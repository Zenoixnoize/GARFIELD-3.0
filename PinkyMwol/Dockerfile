FROM quay.io/lyfe00011/test:beta

RUN git clone https://github.com/Zenoixnoize/GARFIELD-3.0 /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
RUN yarn install --no-audit
RUN npm install -g npm@8.5.1
RUN yarn add ytdl-core@latest
RUN git clone https://github.com/Zenoixnoize/uploads
RUN cp -R /root/Utils/* /root/WhatsAsenaDuplicated 
CMD ["node", "bot.js"]
