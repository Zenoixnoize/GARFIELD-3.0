FROM quay.io/lyfe00011/test:beta

RUN git clone https://github.com/Zenoixnoize/GARFIELD-3.0 /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
RUN yarn install --no-audit
RUN npm install ytdl-core@latest
RUN git clone https://github.com/Zenoixnoize/uploads
RUN cp -R /root/Utils/* /root/WhatsAsenaDuplicated 
CMD ["node", "bot.js"]
