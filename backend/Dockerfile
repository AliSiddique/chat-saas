FROM node:18-alpine

# Set environment variables
ENV NODE_ENV=development
ENV PORT=4000
ENV MONGO_URI=mongodb+srv://alisiddique:16Doomsday@cluster0.kvlucqq.mongodb.net/?retryWrites=true&w=majority
ENV JWT_SECRET=abc123
ENV STRIPE_SECRET_KEY=WQ

RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "dev"]
