FROM python:3.7-slim
RUN mkdir /usr/src/app/
COPY . /usr/src/app/
WORKDIR /usr/src/app/
EXPOSE 5000
RUN python -m pip install --upgrade pip
RUN pip install -r requirements.txt
CMD ["python", "app.py"]