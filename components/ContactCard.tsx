"use client";

import { LoaderCircle, SendHorizontal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { toast } from "sonner";

function ContactCard() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const currentTarget = e.currentTarget;
    const formData = new FormData(currentTarget);

    if (!navigator.onLine) {
      toast.error("Sem conexão com a internet!", {
        description:
          "Verifique sua conexão e tente novamente em alguns segundos",
      });
      return;
    }

    try {
      setLoading(true);
      await fetch("https://formspree.io/f/mblqjzqa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });
      toast.success("Mensagem enviada!", {
        description: "Sua mensagem foi recebida! Muito obrigado!",
      });
      currentTarget.reset();
    } catch (error) {
      toast.error("Algo de errado não está certo!", {
        description:
          "Algum erro ocorreu no envio do formulário. Tente novamente mais tarde.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="bg-white w-full max-w-225">
      <CardContent>
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Nome</Label>
              <Input type="text" name="name" id="name" required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input type="email" name="email" id="email" required />
            </div>
          </div>
          <div>
            <Label htmlFor="message">Mensagem</Label>
            <Textarea
              id="message"
              name="message"
              className="min-h-50"
              required
            />
          </div>
          <div className="flex flex-col-reverse gap-4 sm:flex-row sm:justify-between sm:items-center">
            <Typography>
              Prefere um email?{" "}
              <b className="text-main hover:underline">
                <a href="mailto:contato@felipesilvestre.dev">
                  contato@felipesilvestre.dev
                </a>
              </b>
            </Typography>

            <Button type="submit" disabled={loading}>
              Enviar{" "}
              {loading ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                <SendHorizontal />
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export { ContactCard };
