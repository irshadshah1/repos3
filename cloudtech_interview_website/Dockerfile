
FROM amazonlinux:2023

RUN dnf update -y && \
    dnf install -y httpd && \
    dnf clean all

COPY . /var/www/html/

EXPOSE 80

CMD ["/usr/sbin/httpd", "-D", "FOREGROUND"]

