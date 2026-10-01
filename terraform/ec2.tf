resource "aws_key_pair" "devops_key" {
  key_name   = "${var.project_name}-ssh-key"
  public_key = file("~/.ssh/aws-devops-key.pub")
}

resource "aws_instance" "app_server" {
  ami           = "ami-07b5535e5ab992950"
  instance_type = "t3.micro"

  subnet_id              = aws_subnet.public.id
  vpc_security_group_ids = [aws_security_group.ec2_sg.id]
  associate_public_ip_address = true

  user_data = base64encode(<<-SCRIPT
#!/bin/bash
apt update -y
apt install -y docker.io nginx
usermod -aG docker ubuntu
systemctl enable docker
systemctl start docker
systemctl enable nginx
SCRIPT
  )

  key_name = aws_key_pair.devops_key.key_name

  tags = { Name = "${var.project_name}-server" }
}

